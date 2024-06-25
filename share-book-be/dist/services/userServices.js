"use strict";
const userDao = require('../dao/userDao');
// Get all users (pet guardians)
const getAllUsers = () => {
    return userDao.getAllUsers();
};
// Get a user (pet guardian) by ID
const getUserById = (id) => {
    return userDao.getUserById(id);
};
// Add a new user (pet guardian)
const addUser = (newUser) => {
    return userDao.addUser(newUser);
};
// Update a user (pet guardian) by ID
const updateUser = (id, updatedUser) => {
    return userDao.updateUser(id, updatedUser);
};
// Delete a user (pet guardian) by ID
const deleteUser = (id) => {
    return userDao.deleteUser(id);
};
module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
