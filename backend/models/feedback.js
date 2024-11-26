// backend/models/feedback.js

const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./user');
const Event = require('./event');

const Feedback = sequelize.define('Feedback', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    eventId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Event,
            key: 'id',
        },
    },
    feedbackText: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
});

// Sync the model with the database
Feedback.sync();

module.exports = Feedback;