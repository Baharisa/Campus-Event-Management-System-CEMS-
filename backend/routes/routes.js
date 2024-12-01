const express = require('express');
const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Use the routes from eventRoutes.js for all routes starting with /api/v1/events
router.use('/events', eventRoutes);

// Use the routes from userRoutes.js for all routes starting with /api/v1/users
router.use('/users', userRoutes);

module.exports = router;
