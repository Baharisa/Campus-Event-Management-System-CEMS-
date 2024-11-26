// Admin dashboard analytics 
// backend/services/analyticsService.js

const Event = require('../models/event');
const Reservation = require('../models/reservation');

// Get analytics for admin dashboard
const getEventAnalytics = async () => {
    const totalEvents = await Event.count();
    const totalReservations = await Reservation.count();
    return {
        totalEvents,
        totalReservations,
    };
};

module.exports = {
    getEventAnalytics,
};