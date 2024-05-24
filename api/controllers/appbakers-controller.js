const AppBaker = require('../models/AppBaker');
const Data = require('../data/data')

exports.getBakers = (req, res) => {
    res.json(Data.appBakers);
};

exports.getBaker = (req, res) => {
    const baker = Data.appBakers.find(b => b.id === parseInt(req.params.id));
    if (!baker) return res.status(404).send('The baker with the given ID was not found.');
    res.send(baker);
};

exports.addBaker = (req, res) => {
    const baker = new AppBaker(bakers.length + 1, req.body.name, req.body.quota, req.body.flavours, req.body.pastries);
    Data.appBakers.push(baker);

    res.status(204).send();
};

exports.updateBaker = (req, res) => {
    const baker = Data.appBakers.find(b => b.id === parseInt(req.params.id));
    if (!baker) return res.status(404).send('The baker with the given ID was not found.');

    baker.name = req.body.name;
    baker.quota = req.body.quota;
    baker.flavours = req.body.flavours;
    baker.pastries = req.body.pastries;

    res.status(204).send();
};

exports.deleteBaker = (req, res) => {
    const baker = Data.appBakers.find(b => b.id === parseInt(req.params.id));
    if (!baker) return res.status(404).send('The baker with the given ID was not found.');

    const index = Data.appBakers.indexOf(baker);
    Data.appBakers.splice(index, 1);

    res.status(204).send();
};
