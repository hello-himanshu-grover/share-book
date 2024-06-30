const { mongoDBClient } = require('../mongoClient');
const booksCollection = mongoDBClient.getCollection('books');

interface NewBook {
  title: string, 
  author: string, 
  isbn: string, 
  description: string
}
const addBook = (newBook: NewBook) => {
  return booksCollection.insertOne(newBook);
};

interface SearchBookParams {
  author?: string,
}
const getBooks = (searchedBookParams: SearchBookParams) => {
  return booksCollection.find(searchedBookParams).toArray();
};

export {
  addBook,
  getBooks
};
