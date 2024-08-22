const express = require('express');
const bakersController = require('../controllers/bakers-controller');
const router = express.Router();

router.get('/', bakersController.getBakers);
router.get('/:id', bakersController.getBaker);
router.post('/', bakersController.addBaker);
router.put('/:id', bakersController.updateBaker);
router.delete('/:id', bakersController.deleteBaker);

module.exports = router;