const express = require('express');
const pastriesController = require('../controllers/pastries-controller');
const router = express.Router();

router.get('/', pastriesController.getPastries);
router.get('/:id', pastriesController.getPastry);
router.post('/', pastriesController.addPastry);
router.put('/:id', pastriesController.updatePastry);
router.delete('/:id', pastriesController.deletePastry);

module.exports = router;