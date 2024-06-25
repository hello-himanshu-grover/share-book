// Sample data (you would typically interact with a database)
let users = [
  { id: "1", name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
  { id: "2", name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' }
];

interface User {
  id: string,
  name: string,
  email: string,
  phone: string
}

// Get all users (book guardians)
const getAllUsers = () => {
  return users;
};

// Get a user (book guardian) by ID
const getUserById = (id: string) => {
  return users.find(user => user.id === id);
};

// Add a new user (book guardian)
const addUser = (newUser: User) => {
  users.push(newUser);
  return newUser;
};

// Update a user (book guardian) by ID
const updateUser = (id: string, updatedUser: User) => {
  const userIndex = users.findIndex((user: User) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    return users[userIndex];
  }
  return null;
};

// Delete a user (book guardian) by ID
const deleteUser = (id: string) => {
  const userIndex = users.findIndex((user: User) => user.id === id);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    return deletedUser;
  }
  return null;
};

export {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};
