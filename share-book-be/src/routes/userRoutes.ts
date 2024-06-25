import { Router, Request, Response } from 'express';
const userService = require('../services/userServices');

const router = Router();

router.post('api/register', (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  
})

// GET all users (book guardians)
router.get('/api/users', (req: Request, res: Response) => {
  const users = userService.getAllUsers();
  res.json(users);
});

// GET a specific user (book guardian) by ID
router.get('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// POST a new user (book guardian)
router.post('/api/users', (req: Request, res: Response) => {
  const newUser = req.body;
  const createdUser = userService.addUser(newUser);
  res.status(201).json(createdUser);
});

// PUT update an existing user (book guardian) by ID
router.put('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  const user = userService.updateUser(id, updatedUser);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// DELETE a user (book guardian) by ID
router.delete('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deletedUser = userService.deleteUser(id);
  if (!deletedUser) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ message: 'User deleted', deletedUser });
});

export { router as userRoutes };
