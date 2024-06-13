const Data = require('../data/data')
const Pastry = require('../models/pastery');

exports.getPastries = (req, res) => {
    res.json(Data.pasteries);
};

exports.getPastry = (req, res) => {
    const pastry = Data.pasteries.find(p => p.id === parseInt(req.params.id));
    if (!pastry) return res.status(404).send('The pastry with the given ID was not found.');
    res.send(pastry);
};

exports.addPastry = (req, res) => {
    const pastry = new Pastry(Data.pasteries.length + 1, req.body.name);
    Data.pasteries.push(pastry);

    res.status(204).send();
};

exports.updatePastry = (req, res) => {
    const pastry = Data.pasteries.find(p => p.id === parseInt(req.params.id));
    if (!pastry) return res.status(404).send('The pastry with the given ID was not found.');
    pastry.name = req.body.name;
    pastry.bakingType = req.body.bakingType;
    pastry.startTime = req.body.startTime;
    pastry.duration = req.body.duration;
    pastry.size = req.body.size;

    res.status(204).send();
};

exports.deletePastry = (req, res) => {
    const pastry = Data.pasteries.find(p => p.id === parseInt(req.params.id));
    if (!pastry) return res.status(404).send('The pastry with the given ID was not found.');

    const index = Data.pasteries.indexOf(pastry);
    Data.pasteries.splice(index, 1);

    res.status(204).send();
};
