const express = require('express');
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  registerForEvent,
} = require('../controllers/eventController'); // Ensure the correct path
const router = express.Router();

// @route   GET /api/v1/events
// @desc    Get all events
router.get('/', getAllEvents);

// @route   POST /api/v1/events
// @desc    Create a new event
router.post('/', createEvent);

// @route   PUT /api/v1/events/:eventId
// @desc    Update an event by ID
router.put('/:eventId', updateEvent);

// @route   DELETE /api/v1/events/:eventId
// @desc    Delete an event by ID
router.delete('/:eventId', deleteEvent);

// @route   POST /api/v1/events/:eventId/register
// @desc    Register a user for an event
router.post('/:eventId/register', registerForEvent);

module.exports = router;
