// backend/routes/v1/eventRoutes.js

const express = require('express');
const { 
    createEvent, 
    getAllEvents, 
    updateEvent, 
    deleteEvent 
} = require('../../controllers/eventController');
const router = express.Router();

// Route to create a new event
router.post('/', createEvent);

// Route to get all events
router.get('/', getAllEvents);

// Route to update an event
router.put('/:eventId', updateEvent);

// Route to delete an event
router.delete('/:eventId', deleteEvent);

module.exports = router;