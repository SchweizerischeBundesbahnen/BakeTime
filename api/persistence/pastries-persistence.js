const store = require('node-persist');
const Pastry = require('../models/pastry');
const logger = require('../logger').named('pastries-persistence');

const defaultItem = new Pastry(1, 'BakeTime');

class PastriesPersistence {
    constructor() {
        this._data = [defaultItem];
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
        const data = await store.get('pastries');
        if (data == null) {
            logger.debug('init storage…');
            await this.set(this._data);
        } else {
            logger.debug('using persisted data…');
            this._data = data;
        }
        logger.debug('initialized pastries with:', this._data);
    }

    async add(pastry) {
        this._data.push(pastry);
        await this.set(this._data);
    }

    async set(pastries) {
        this._data = pastries;
        await store.set('pastries', this._data);
        logger.debug('set pastries:', this._data);
    }
}

const instance = new PastriesPersistence();
module.exports = instance;
