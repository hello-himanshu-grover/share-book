"use client"
import { Button, Card, CardActionArea, CardContent, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function WelcomePage() {
  const router = useRouter();
  
  return (
    <>
      <Grid container justifyContent="center" gap={5}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center">Welcome to <span className='philosopher-bold' style={{ color: '#0959AA' }}>Booklica</span></Typography>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Card>
            <CardActionArea onClick={() => router.push('/portal/user/addbook')}>
              <CardContent>
                <Stack spacing={5} alignItems="center">
                  <Typography variant='h5' textAlign="center">Want to add book to share?</Typography>
                  <Button variant="outlined">Add Book</Button>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid lg={3} md={4} sm={6} xs={12}>
          <Card>
            <CardActionArea onClick={() => router.push('/portal/user/books')}>
              <CardContent>
                <Stack spacing={5} alignItems="center">
                  <Typography variant='h5' textAlign="center">Looking for a book to borrow?</Typography>
                  <Button variant="outlined">Find Book</Button>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
