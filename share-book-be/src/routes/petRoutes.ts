import { Router, Request, Response } from 'express';
const petService = require('../services/petServices');

const router = Router();

// GET all pet listings
router.get('/api/pets', (req: Request, res: Response) => {
  const pets = petService.getAllPets();
  res.json(pets);
});

// GET a specific pet listing by ID
router.get('/api/pets/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const pet = petService.getPetById(id);
  if (!pet) {
    return res.status(404).json({ message: 'Pet listing not found' });
  }
  res.json(pet);
});

// POST a new pet listing
router.post('/api/pets', (req: Request, res: Response) => {
  const newPet = req.body;
  const createdPet = petService.addPet(newPet);
  res.status(201).json(createdPet);
});

// PUT update an existing pet listing by ID
router.put('/api/pets/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedPet = req.body;
  const pet = petService.updatePet(id, updatedPet);
  if (!pet) {
    return res.status(404).json({ message: 'Pet listing not found' });
  }
  res.json(pet);
});

// DELETE a pet listing by ID
router.delete('/api/pets/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deletedPet = petService.deletePet(id);
  if (!deletedPet) {
    return res.status(404).json({ message: 'Pet listing not found' });
  }
  res.json({ message: 'Pet listing deleted', deletedPet });
});

export { router as petRoutes };
