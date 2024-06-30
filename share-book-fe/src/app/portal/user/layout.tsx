"use client"
import React from 'react'
import { Container, Link, Box, Typography } from '@mui/material'
import AppAppBar from '@/app/_components/landingPage/AppAppBar';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://booklica.com/">
                Booklica
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const navigationItems = [
    { id: 'mybooks', label: 'My Books' },
    { id: 'addbooks', label: 'Add Books' },
    { id: 'findbooks', label: 'Find Books' }
  ];

export default function page({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundImage:
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                    backgroundSize: '100% 20%',
                    backgroundRepeat: 'no-repeat',
                })}
            >  
                <Box sx={{minHeight: '80px'}}>
                <AppAppBar isUserLoggedIn={true} navigationItems={navigationItems} />
                </Box>
                <Container component="main" sx={{ py: 8 }}>
                    {children}
                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container>
                        <Typography variant="body1">
                            Privacy | Terms & Policy | Contact | Feedback
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </>
    )
}
