const express = require('express');
const router = express.Router();
const EmailController = require('../controllers/EmailController.js');

router.get('/:to_email/:content', EmailController.send_email);


module.exports = router;