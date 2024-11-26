// Event category handling 
// backend/services/categoryService.js

const Category = require('../models/category');

// Create a new category
const createCategory = async (name) => {
    return await Category.create({ name });
};

// Get all categories
const getAllCategories = async () => {
    return await Category.findAll();
};

module.exports = {
    createCategory,
    getAllCategories,
};