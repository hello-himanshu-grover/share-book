"use strict";
const mongoClient = require('../mongoClient');
const dbClient = mongoClient.getClient();
// Sample data (you would typically interact with a database)
let petListings = [
    { id: 1, name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3, description: 'Friendly and playful dog looking for a loving home.' },
    { id: 2, name: 'Mittens', species: 'Cat', breed: 'Siamese', age: 2, description: 'Gentle and affectionate cat seeking a quiet household.' }
];
// Get all pet listings
const getAllPets = () => {
    return petListings;
};
// Get a pet listing by ID
const getPetById = (id) => {
    return petListings.find(pet => pet.id === id);
};
// Add a new pet listing
const addPet = (newPet) => {
    newPet.id = petListings.length + 1;
    petListings.push(newPet);
    return newPet;
};
// Update a pet listing by ID
const updatePet = (id, updatedPet) => {
    const petIndex = petListings.findIndex(pet => pet.id === id);
    if (petIndex !== -1) {
        petListings[petIndex] = Object.assign(Object.assign({}, petListings[petIndex]), updatedPet);
        return petListings[petIndex];
    }
    return null;
};
// Delete a pet listing by ID
const deletePet = (id) => {
    const petIndex = petListings.findIndex(pet => pet.id === id);
    if (petIndex !== -1) {
        const deletedPet = petListings.splice(petIndex, 1)[0];
        return deletedPet;
    }
    return null;
};
module.exports = {
    getAllPets,
    getPetById,
    addPet,
    updatePet,
    deletePet
};
