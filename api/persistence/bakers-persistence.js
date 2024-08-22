const store = require('node-persist');
const { appBakers } = require('../data/data');
const logger = require('../logger').named('bakers-persistence');

class BakersPersistence {
    constructor() {
        this._data = appBakers;
        this._ready = this.init();
    }

    get data() {
        return this._data;
    }

    get ready() {
        return this._ready;
    }

    async init() {
        await store.init();
        const data = await store.get('bakers');
        if (data == null) {
            logger.debug('init storage…');
            await this.set(this._data);
        } else {
            logger.debug('using persisted data…');
            this._data = data;
        }
        logger.debug('initialized bakers with:', this._data);
    }

    async add(baker) {
        this._data.push(baker);
        await this.set(this._data);
    }

    async set(bakers) {
        this._data = bakers;
        await store.set('bakers', this._data);
        logger.debug('set bakers:', this._data);
    }
}

const instance = new BakersPersistence();
module.exports = instance;
