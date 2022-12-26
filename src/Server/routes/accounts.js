const express = require('express');
const router = express.Router();
const accountsController = require('../controllers/AccountsController');

router.get('/:username', accountsController.read);
router.get('/info/:username', accountsController.info);
router.post('/signup/:username', accountsController.signup);
router.put('/update/:username', accountsController.update);
router.delete('/delete/:username', accountsController.delete);

module.exports = router;