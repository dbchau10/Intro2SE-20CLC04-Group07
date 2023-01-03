const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/ItemsController');

router.get('/search', itemsController.search);
router.get('/getById/:id', itemsController.getById);
router.get('/getTopProduct', itemsController.getTopProduct);
router.post('/create', itemsController.create);
router.put('/updateStatus/:id', itemsController.updateStatus);
router.put('/updateRating/:id', itemsController.updateRating);
router.delete('/delete/:id', itemsController.delete);

module.exports = router;