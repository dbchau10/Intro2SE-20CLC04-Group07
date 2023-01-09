const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/ItemsController');

router.get('/search', itemsController.search);
router.get('/getById/:id', itemsController.getById);
router.get('/getTopProduct', itemsController.getTopProduct);
router.get('/getOtherProduct/:id', itemsController.getOtherProduct);
router.get('/getByLender/:username', itemsController.getByLender);
router.get('/getByRequest/:username/:status', itemsController.getByRequest);
router.post('/create', itemsController.create);
router.put('/updateStatus/:id/:status/:borrow_times', itemsController.updateStatus);
router.put('/updateRating/:id', itemsController.updateRating);
router.delete('/delete/:id', itemsController.delete);

module.exports = router;