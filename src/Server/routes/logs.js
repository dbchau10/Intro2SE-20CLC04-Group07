const express = require('express');
const router = express.Router();
const logsController = require('../controllers/LogsController');

router.get('/:username', logsController.read);
router.post('/create', logsController.create);

module.exports = router;