const app = require('./app');
const sequelize = require('./models/db');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.sync(); // Ensure database tables are ready
        console.log('Database synchronized.');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Error starting the server:', error);
    }
})();
