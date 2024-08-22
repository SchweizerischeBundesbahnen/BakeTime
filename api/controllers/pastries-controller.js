const Pastry = require('../models/pastry');
const store = require('../persistence/pastries-persistence');

exports.getPastries = async (req, res) => {
    res.json(store.data);
};

exports.getPastry = async (req, res) => {
    const pastry = store.data.find(p => p.id === parseInt(req.params.id));
    if (!pastry) return res.status(404).send('The pastry with the given ID was not found.');
    res.send(pastry);
};

exports.addPastry = async (req, res) => {
    const pastry = new Pastry(store.data.length + 1, req.body.name);
    await store.add(pastry);

    res.status(204).send();
};

exports.updatePastry = async (req, res) => {
    const pastry = store.data.find(p => p.id === parseInt(req.params.id));
    if (!pastry) return res.status(404).send('The pastry with the given ID was not found.');

    pastry.name = req.body.name;
    pastry.bakingType = req.body.bakingType;
    pastry.startTime = req.body.startTime;
    pastry.duration = req.body.duration;
    pastry.size = req.body.size;
    await store.set(store.data);

    res.status(204).send();
};

exports.deletePastry = async (req, res) => {
    const pastry = store.data.find(p => p.id === parseInt(req.params.id));
    if (!pastry) return res.status(404).send('The pastry with the given ID was not found.');

    const index = store.data.indexOf(pastry);
    store.data.splice(index, 1);
    await store.set(store.data);

    res.status(204).send();
};
