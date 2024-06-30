"use client"
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Link } from '@mui/material'
import React from 'react'
import { postData } from '../../../_hooks/useAxios'
import { useRouter } from 'next/navigation'

export default function SignIn() {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const loginData = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        const loginResponse = await postData('http://localhost:3000/api/users/signin', loginData);
        if (loginResponse?.code === 'LOGIN_SUCCESS' && loginResponse?.data?.authToken) {
            localStorage.setItem("authToken", loginResponse.data.authToken);
            router.push('/portal/user')
        }
    };

    return (
        <>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/portal/auth/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
