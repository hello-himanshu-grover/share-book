import { Router, Request, Response } from 'express';
import { validateUser } from '../middlewares/validateUser';
const bookService = require('../services/bookServices');

const router = Router();

router.post('/add', validateUser, async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, description } = req.body;
    await bookService.addBook({ title, author, isbn, description });
    res.status(200).send({ message: 'Book Added', code: 'BOOK_ADDED' });
  } catch (error: any) {
    res.status(500).send({ message: error?.message, stack: error?.stack });
  }
})

router.get('/', validateUser, async (req: Request, res: Response) => {
  try {
    const { author } = req.query;
    const books = await bookService.getBooks({ ...(author ? { author } : {}) });
    res.status(200).send({ data: books, message: 'Book Fetched', code: 'BOOKS_FETCHED' });
  } catch (error: any) {
    res.status(500).send({ message: error?.message || "Books could not fetched", stack: error?.stack });
  }
})

export { router as bookRoutes };