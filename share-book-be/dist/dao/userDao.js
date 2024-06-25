"use strict";
// Sample data (you would typically interact with a database)
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' }
];
// Get all users (pet guardians)
const getAllUsers = () => {
    return users;
};
// Get a user (pet guardian) by ID
const getUserById = (id) => {
    return users.find(user => user.id === id);
};
// Add a new user (pet guardian)
const addUser = (newUser) => {
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
};
// Update a user (pet guardian) by ID
const updateUser = (id, updatedUser) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), updatedUser);
        return users[userIndex];
    }
    return null;
};
// Delete a user (pet guardian) by ID
const deleteUser = (id) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1)[0];
        return deletedUser;
    }
    return null;
};
module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
