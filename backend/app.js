const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors()); // Allow requests from the frontend
app.use(bodyParser.json()); // Parse JSON request bodies
app.use('/api/users', userRoutes); // Mount user routes

module.exports = app;
