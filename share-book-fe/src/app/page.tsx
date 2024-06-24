"use client"
import * as React from 'react';
import {
  Box,
  CssBaseline,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PaletteMode } from '@mui/material';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';


export default function Home() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero />
        <Box sx={{ bgcolor: 'background.default' }}>
          <LogoCollection />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </Box>
      </ThemeProvider>
    </main>
  );
}
