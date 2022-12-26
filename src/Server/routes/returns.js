const express = require('express');
const router = express.Router();
const returnsController = require('../controllers/ReturnsController');

router.get('/readByItem/:id', returnsController.readByItem);
router.get('/create', returnsController.create);
router.get('/delete/:id', returnsController.delete);

module.exports = router;