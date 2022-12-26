const express = require('express');
const router = express.Router();
const ratingsController = require('../controllers/RatingsController');

router.get('/readItemRating/:id', ratingsController.readItemRating);
router.get('/readBorrowerRating/:id', ratingsController.readBorrowerRating);
router.post('/createItemRating', ratingsController.createItemRating);
router.post('/createBorrowerRating', ratingsController.createBorrowerRating);

module.exports = router;