"use client"
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import ListingCard from '@/app/_components/common/ListingCard';

interface BookFormProps {
  onSubmit: (book: Book) => void;
}

interface Book {
  title: string;
  author: string;
  description: string;
  isbn: string;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const [book, setBook] = useState<Book>({ title: '', author: '', description: '', isbn: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(book);
    setBook({ title: '', author: '', description: '', isbn: '' });
  };

  return (
    <Grid container spacing={6} justifyContent="space-between" alignItems="center">
      <Grid item lg={8} md={12}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Add book to share
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Description"
            name="description"
            value={book.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="ISBN"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Add Book
          </Button>
        </Box>
      </Grid>
      <Grid item lg={4} md={12}>
        <ListingCard {...{
          imgSrc: "https://i.pinimg.com/736x/71/be/d7/71bed7e22855c30309b47ee9a3083001.jpg",
          name: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          publisher: "Scribner"
        }} />
      </Grid>
    </Grid>
  );
};

export default BookForm;
