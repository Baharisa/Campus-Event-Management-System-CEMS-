// backend/controllers/eventController.js

const Event = require('../models/event'); // Assuming Event is a Sequelize model

// Create a new event
exports.createEvent = async (req, res) => {
    const { title, description, date, location } = req.body;
    try {
        const newEvent = await Event.create({ title, description, date, location });
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
};

// Retrieve all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    const { eventId } = req.params;
    const { title, description, date, location } = req.body;
    try {
        const event = await Event.findByPk(eventId);
        if (event) {
            event.title = title;
            event.description = description;
            event.date = date;
            event.location = location;
            await event.save();
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    const { eventId } = req.params;
    try {
        const event = await Event.findByPk(eventId);
        if (event) {
            await event.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
};