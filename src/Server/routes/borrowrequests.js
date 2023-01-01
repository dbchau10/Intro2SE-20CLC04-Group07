const express = require('express');
const router = express.Router();
const borrowRequestsController = require('../controllers/BorrowRequestsController');

router.get('/readByItem/:id', borrowRequestsController.readByItem);
router.get('/readById/:id', borrowRequestsController.readById);
router.post('/create', borrowRequestsController.create);
router.delete('/deleteByItem/:item_id/:req_id', borrowRequestsController.deleteByItem);
router.delete('/deleteById/:id', borrowRequestsController.deleteById);
module.exports = router;