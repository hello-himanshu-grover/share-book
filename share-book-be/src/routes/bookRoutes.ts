import { Router, Request, Response } from 'express';
const bookService = require('../services/bookServices');

const router = Router();

// GET all book listings
router.get('/api/books', (req: Request, res: Response) => {
  const books = bookService.getAllBooks();
  res.json(books);
});

// GET a specific book listing by ID
router.get('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = bookService.getBookById(id);
  if (!book) {
    return res.status(404).json({ message: 'Book listing not found' });
  }
  res.json(book);
});

// POST a new book listing
router.post('/api/books', (req: Request, res: Response) => {
  const newBook = req.body;
  const createdBook = bookService.addBook(newBook);
  res.status(201).json(createdBook);
});

// PUT update an existing book listing by ID
router.put('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  const book = bookService.updateBook(id, updatedBook);
  if (!book) {
    return res.status(404).json({ message: 'Book listing not found' });
  }
  res.json(book);
});

// DELETE a book listing by ID
router.delete('/api/books/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deletedBook = bookService.deleteBook(id);
  if (!deletedBook) {
    return res.status(404).json({ message: 'Book listing not found' });
  }
  res.json({ message: 'Book listing deleted', deletedBook });
});

export { router as bookRoutes };
