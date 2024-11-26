// backend/routes/v1/feedbackRoutes.js

const express = require('express');
const {
    submitFeedback,
    getEventFeedback
} = require('../../controllers/feedbackController');
const router = express.Router();

// Route to submit feedback for an event
router.post('/', submitFeedback);

// Route to get feedback for an event
router.get('/:eventId', getEventFeedback);

module.exports = router;