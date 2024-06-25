"use strict";
const express = require('express');
const router = express.Router();
const userService = require('../services/userServices');
router.post('api/register', (req, res) => {
    const { name, email, password } = req.body;
});
// GET all users (pet guardians)
router.get('/api/users', (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
});
// GET a specific user (pet guardian) by ID
router.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = userService.getUserById(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});
// POST a new user (pet guardian)
router.post('/api/users', (req, res) => {
    const newUser = req.body;
    const createdUser = userService.addUser(newUser);
    res.status(201).json(createdUser);
});
// PUT update an existing user (pet guardian) by ID
router.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    const user = userService.updateUser(id, updatedUser);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});
// DELETE a user (pet guardian) by ID
router.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedUser = userService.deleteUser(id);
    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted', deletedUser });
});
module.exports = router;
