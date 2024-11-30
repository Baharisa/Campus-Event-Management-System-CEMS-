require('dotenv').config(); // Load environment variables
const app = require('./app'); // Import app.js
const { Pool } = require('pg');

// Initialize PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL Database'))
  .catch(err => {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // Exit process with failure
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
