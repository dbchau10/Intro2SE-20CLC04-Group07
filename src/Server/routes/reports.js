const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/ReportsController');

router.get('/', reportsController.read);
router.get('/:id', reportsController.readById);
router.post('/create', reportsController.create);
router.delete('/delete/:id', reportsController.delete);

module.exports = router;