const bookDao = require('../dao/bookDao');

interface NewBook {
  title: string, 
  author: string, 
  isbn: string, 
  description: string
}
const addBook = (newBook: NewBook) => {
  return bookDao.addBook(newBook);
}

interface SearchBookParams {
  author?: string,
}
const getBooks = (searchedBookParams: SearchBookParams) => {
  return bookDao.getBooks(searchedBookParams);
}

export {
  addBook,
  getBooks
};
