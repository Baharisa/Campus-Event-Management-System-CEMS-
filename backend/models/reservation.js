// backend/models/reservation.js

const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const User = require('./user');
const Event = require('./event');

const Reservation = sequelize.define('Reservation', {
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
}, {
    timestamps: true,
});

// Sync the model with the database
Reservation.sync();

module.exports = Reservation;