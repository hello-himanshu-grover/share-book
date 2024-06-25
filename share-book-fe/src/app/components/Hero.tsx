"use client"
import * as React from 'react';
import { Paper, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ListingCard from "./ListingCard"

interface Book {
  imgSrc: string,
  name: string,
  author: string,
  publisher: string
}

const data: Book[] = [
  {
      imgSrc: "https://i.pinimg.com/736x/71/be/d7/71bed7e22855c30309b47ee9a3083001.jpg",
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publisher: "Scribner"
  },
  {
      imgSrc: "https://i.pinimg.com/736x/71/be/d7/71bed7e22855c30309b47ee9a3083001.jpg",
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      publisher: "J. B. Lippincott & Co."
  },
  {
      imgSrc: "https://thumbs.dreamstime.com/b/modern-vector-abstract-book-cover-template-teared-paper-47197768.jpg",
      name: "1984",
      author: "George Orwell",
      publisher: "Secker & Warburg"
  },
  {
      imgSrc: "https://i.pinimg.com/736x/71/be/d7/71bed7e22855c30309b47ee9a3083001.jpg",
      name: "Pride and Prejudice",
      author: "Jane Austen",
      publisher: "T. Egerton, Whitehall"
  },
  // Add more books here...
];



export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Find a&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Book</Typography>
            &nbsp;nearby
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Discover the joy of reading with our local book-sharing network. Easily borrow from neighbors, fostering a community of literary enthusiasts right in your neighborhood.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Search by title, author or publisher"
              placeholder="Search by title, author or publisher"
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Search by title, author or publisher',
              }}
            />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            <Link href="#" color="primary">
              Or lend out your books and earn
            </Link>
            .
          </Typography>
        </Stack>
        <Paper variant="outlined" sx={{ mt: 8, p: 2 }}>
          <Grid container spacing={2}>
            {data.map(book => (
              <Grid item lg={3} md={4} sm={2} xs={1}>
                <ListingCard {...book} />
              </Grid>
            ))}
          </Grid>
          <Box mt={2} textAlign="center">
            <Button variant="text">Show More</Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}