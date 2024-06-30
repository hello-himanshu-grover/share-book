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
import AppAppBar from './_components/landingPage/AppAppBar';
import Hero from './_components/landingPage/Hero';
import LogoCollection from './_components/landingPage/LogoCollection';
import Highlights from './_components/landingPage/Highlights';
import Features from './_components/landingPage/Features';
import Testimonials from './_components/landingPage/Testimonials';
import FAQ from './_components/landingPage/FAQ';
import Footer from './_components/landingPage/Footer';
import getLPTheme from './getLPTheme';

const navigationItems = [
  { id: 'features', label: 'Features' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'faq', label: 'FAQ' },
];

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
        <AppAppBar navigationItems={navigationItems} mode={mode} toggleColorMode={toggleColorMode} />
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
