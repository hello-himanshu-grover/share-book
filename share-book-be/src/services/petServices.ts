const petDao = require('../dao/petDao');

interface Pet {
  name: string,
  age: number
}

// Get all pet listings
const getAllPets = () => {
  return petDao.getAllPets();
};

// Get a pet listing by ID
const getPetById = (id: string) => {
  return petDao.getPetById(id);
};

// Add a new pet listing
const addPet = (newPet: Pet) => {
  return petDao.addPet(newPet);
};

// Update a pet listing by ID
const updatePet = (id: string, updatedPet: Pet) => {
  return petDao.updatePet(id, updatedPet);
};

// Delete a pet listing by ID
const deletePet = (id: string) => {
  return petDao.deletePet(id);
};

export {
  getAllPets,
  getPetById,
  addPet,
  updatePet,
  deletePet
};
