const { mongoDBClient } = require('../mongoClient');
const dbClient = mongoDBClient.getClient();

interface Book {
  id: string,
  name: string,
  age: number,
  breed: string,
  species: string,
  description: string
}

// Sample data (you would typically interact with a database)
let bookListings = [
  { id: "1", name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3, description: 'Friendly and playful dog looking for a loving home.' },
  { id: "2", name: 'Mittens', species: 'Cat', breed: 'Siamese', age: 2, description: 'Gentle and affectionate cat seeking a quiet household.' }
];

// Get all book listings
const getAllBooks = () => {
  return bookListings;
};

// Get a book listing by ID
const getBookById = (id: string) => {
  return bookListings.find(book => book.id === id);
};

// Add a new book listing
const addBook = (newBook: Book) => {
  bookListings.push(newBook);
  return newBook;
};

// Update a book listing by ID
const updateBook = (id: string, updatedBook: Book) => {
  const bookIndex = bookListings.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    bookListings[bookIndex] = { ...bookListings[bookIndex], ...updatedBook };
    return bookListings[bookIndex];
  }
  return null;
};

// Delete a book listing by ID
const deleteBook = (id: string) => {
  const bookIndex = bookListings.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    const deletedBook = bookListings.splice(bookIndex, 1)[0];
    return deletedBook;
  }
  return null;
};

export {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};
