// backend/routes/v1/searchRoutes.js

const express = require('express');
const { searchEvents } = require('../../controllers/searchController');
const router = express.Router();

// Route to search for events
router.get('/', searchEvents);

module.exports = router;