"use client"
import React from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import ListingCard from '../../../_components/common/ListingCard'
import TestData from "../../../_testData/testData"

export default function MainListing() {
  return (
    <>

      <Typography variant="h5" component="h1" gutterBottom>
        Search book to borrow
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search"
        name="title"
        required
      />
      <Grid container spacing={2} mt={2}>
        {TestData.map((book, idx) => (
          <Grid key={idx} item lg={3} md={4} sm={6} xs={12}>
            <ListingCard {...book} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
