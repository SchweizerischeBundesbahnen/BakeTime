const AppBaker = require('../models/baker');
const store = require('../persistence/bakers-persistence');

exports.getBakers = (req, res) => {
    res.json(store.data);
};

exports.getBaker = (req, res) => {
    const baker = store.data.find(b => b.id === parseInt(req.params.id));
    if (!baker) return res.status(404).send('The baker with the given ID was not found.');
    res.send(baker);
};

exports.addBaker = async (req, res) => {
    const baker = new AppBaker(store.data.length + 1, req.body.name, req.body.quota, req.body.flavours, req.body.pastries);
    console.log(baker);
    await store.add(baker);

    res.status(204).send();
};

exports.updateBaker = async (req, res) => {
    const baker = store.data.find(b => b.id === parseInt(req.params.id));
    if (!baker) return res.status(404).send('The baker with the given ID was not found.');

    baker.name = req.body.name;
    baker.quota = req.body.quota;
    baker.flavours = req.body.flavours;
    baker.pastries = req.body.pastries;
    await store.set(store.data);

    res.status(204).send();
};

exports.deleteBaker = async (req, res) => {
    const baker = store.data.find(b => b.id === parseInt(req.params.id));
    if (!baker) return res.status(404).send('The baker with the given ID was not found.');

    const index = store.data.indexOf(baker);
    store.data.splice(index, 1);
    await store.set(store.data);

    res.status(204).send();
};
