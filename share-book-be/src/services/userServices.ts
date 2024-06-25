const userDao = require('../dao/userDao');

interface User {
  id: string,
  name: string,
  email: string,
  phone: string
}

// Get all users (book guardians)
const getAllUsers = () => {
  return userDao.getAllUsers();
};

// Get a user (book guardian) by ID
const getUserById = (id: string) => {
  return userDao.getUserById(id);
};

// Add a new user (book guardian)
const addUser = (newUser: User) => {
  return userDao.addUser(newUser);
};

// Update a user (book guardian) by ID
const updateUser = (id: string, updatedUser: User) => {
  return userDao.updateUser(id, updatedUser);
};

// Delete a user (book guardian) by ID
const deleteUser = (id: string) => {
  return userDao.deleteUser(id);
};

export {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};
