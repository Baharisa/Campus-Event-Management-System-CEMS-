// backend/controllers/feedbackController.js

const Feedback = require('../models/feedback'); // Assuming Feedback is a Sequelize model

// Submit feedback for an event
exports.submitFeedback = async (req, res) => {
    const { eventId, userId, feedbackText } = req.body;
    try {
        const newFeedback = await Feedback.create({ eventId, userId, feedbackText });
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
};

// Get feedback for an event
exports.getEventFeedback = async (req, res) => {
    const { eventId } = req.params;
    try {
        const feedback = await Feedback.findAll({ where: { eventId } });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error });
    }
};