const express = require('express');
const {
  reserveEvent,
  getUserReservations,
  cancelReservation,
} = require('../controllers/reservationController');

const router = express.Router();

// Reserve an event
router.post('/', reserveEvent);

// Get reservations for a user
router.get('/user/:userId', getUserReservations);

// Cancel a reservation
router.delete('/:reservationId', cancelReservation);

module.exports = router;