const bookDao = require('../dao/bookDao');

interface Book {
  name: string,
  age: number
}

// Get all book listings
const getAllBooks = () => {
  return bookDao.getAllBooks();
};

// Get a book listing by ID
const getBookById = (id: string) => {
  return bookDao.getBookById(id);
};

// Add a new book listing
const addBook = (newBook: Book) => {
  return bookDao.addBook(newBook);
};

// Update a book listing by ID
const updateBook = (id: string, updatedBook: Book) => {
  return bookDao.updateBook(id, updatedBook);
};

// Delete a book listing by ID
const deleteBook = (id: string) => {
  return bookDao.deleteBook(id);
};

export {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};
