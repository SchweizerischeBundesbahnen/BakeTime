const express = require('express');
const pasteriesController = require('../controllers/pasteries-controller');
const router = express.Router();

router.get('/', pasteriesController.getPastries);
router.get('/:id', pasteriesController.getPastry);
router.post('/', pasteriesController.addPastry);
router.put('/:id', pasteriesController.updatePastry);
router.delete('/:id', pasteriesController.deletePastry);

module.exports = router;