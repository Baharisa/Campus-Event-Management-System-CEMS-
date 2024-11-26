const express = require('express');
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');

const router = express.Router();

// Create a new event
router.post('/', createEvent);

// Get all events
router.get('/', getAllEvents);

// Update an event
router.put('/:eventId', updateEvent);

// Delete an event
router.delete('/:eventId', deleteEvent);

module.exports = router;