const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/:eventId/register', reservationController.registerForEvent);

module.exports = router;
