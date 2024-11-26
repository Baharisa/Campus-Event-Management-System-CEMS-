// backend/routes/v1/reservationRoutes.js

const express = require('express');
const {
    createReservation,
    getUserReservations,
    cancelReservation
} = require('../../controllers/reservationController');
const router = express.Router();

// Route to create a reservation
router.post('/', createReservation);

// Route to get reservations for a user
router.get('/:userId', getUserReservations);

// Route to cancel a reservation
router.delete('/:reservationId', cancelReservation);

module.exports = router;