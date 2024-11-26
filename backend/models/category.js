// backend/models/category.js

const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: true,
});

// Sync the model with the database
Category.sync();

module.exports = Category;