const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/AccountsController');

router.post('/signup', accountsController.signup);
router.post('/info', accountsController.info);
router.put('/update', accountsController.update);
// router.delete('/delete', accountsController.delete);

module.exports = router;