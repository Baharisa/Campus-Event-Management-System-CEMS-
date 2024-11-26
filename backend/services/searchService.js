// Event search logic 
// backend/services/searchService.js

const Event = require('../models/event');
const { Op } = require('sequelize');

// Search for events by title
const searchEvents = async (query) => {
    return await Event.findAll({
        where: {
            title: {
                [Op.iLike]: `%${query}%`, // Case-insensitive search
            },
        },
    });
};

module.exports = {
    searchEvents,
};