// backend/server.js

const app = require('./app');
const sequelize = require('./models/db'); // Import the database connection
const PORT = process.env.PORT || 3000;

// Sync database and start server
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });