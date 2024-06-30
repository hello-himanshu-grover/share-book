"use client"
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { postData } from '../../../_hooks/useAxios'
import { useRouter } from 'next/navigation'

export default function SignUp() {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const registrationData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        const registrationResponse = await postData('http://localhost:3000/api/users/signup', registrationData);
        if (registrationResponse?.code === 'USER_CREATED') {
            const loginData = {
                email: formData.get('email'),
                password: formData.get('password'),
            };
            const loginResponse = await postData('http://localhost:3000/api/users/signin', loginData);
            if (loginResponse?.code === 'LOGIN_SUCCESS' && loginResponse?.data?.authToken) {
                localStorage.setItem("authToken", loginResponse.data.authToken);
                router.push('/portal/user')
            }
        }
    };

    return (
        <>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Grid container columnSpacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            placeholder="First Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            placeholder="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            placeholder="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            placeholder="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label={<Typography variant="caption">I agree to Terms & Conditions and Privacy Policy."</Typography>}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/portal/auth/signin" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
