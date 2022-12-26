const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/NotificationsController');

router.get('/:username', notificationsController.read);
router.get('/create', notificationsController.create);

module.exports = router;