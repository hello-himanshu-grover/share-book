"use strict";
const petDao = require('../dao/petDao');
// Get all pet listings
const getAllPets = () => {
    return petDao.getAllPets();
};
// Get a pet listing by ID
const getPetById = (id) => {
    return petDao.getPetById(id);
};
// Add a new pet listing
const addPet = (newPet) => {
    return petDao.addPet(newPet);
};
// Update a pet listing by ID
const updatePet = (id, updatedPet) => {
    return petDao.updatePet(id, updatedPet);
};
// Delete a pet listing by ID
const deletePet = (id) => {
    return petDao.deletePet(id);
};
module.exports = {
    getAllPets,
    getPetById,
    addPet,
    updatePet,
    deletePet
};
