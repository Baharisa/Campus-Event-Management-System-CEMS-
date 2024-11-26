// backend/controllers/searchController.js

const Event = require('../models/event'); // Assuming Event is a Sequelize model
const { Op } = require('sequelize'); // Import Sequelize operators

// Search for events by title
exports.searchEvents = async (req, res) => {
    const { query } = req.query; // Get query parameter
    try {
        const events = await Event.findAll({
            where: {
                title: {
                    [Op.iLike]: `%${query}%` // Case-insensitive search
                }
            }
        });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error searching events', error });
    }
};