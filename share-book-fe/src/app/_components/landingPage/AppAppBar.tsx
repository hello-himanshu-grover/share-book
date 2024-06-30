"use client"
import * as React from 'react';
import { Badge, IconButton, PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/MailOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

interface AppAppBarProps {
  navigationItems: { id: string, label: string },
  mode: PaletteMode,
  toggleColorMode: () => void,
  isUserLoggedIn: boolean
}



function AppAppBar({ mode, navigationItems = [], isUserLoggedIn, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
          border: 'none'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-12px',
                px: 0,
              }}
            >
              <Box px={2}>
                <Typography className="philosopher-bold" component="h1" variant="h4" color="primary" sx={{ fontSize: '1.8rem' }}>Booklica</Typography>
              </Box>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navigationItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{ py: '6px', px: '12px' }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {item.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              {!isUserLoggedIn ? (
                <>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component="a"
                    href="/portal/auth/signin/"
                    target="_blank"
                  >
                    Sign in
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component="a"
                    href="/portal/auth/signup/"
                    target="_blank"
                  >
                    Sign up
                  </Button>
                </>)
                : (
                  <>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={4} color="error">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton>
                      <Avatar {...stringAvatar('Shweta N')} />
                    </IconButton>
                  </>
                )}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                  </Box>
                  {navigationItems.map((item) => (
                    <MenuItem key={item.id} onClick={() => scrollToSection(item.id)}>
                      {item.label}
                    </MenuItem>
                  ))}
                  <Divider />
                  {!isUserLoggedIn ? (
                    <>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="contained"
                          component="a"
                          href="/portal/auth/signup/"
                          target="_blank"
                          sx={{ width: '100%' }}
                        >
                          Sign up
                        </Button>
                      </MenuItem>
                      <MenuItem>
                        <Button
                          color="primary"
                          variant="outlined"
                          component="a"
                          href="/portal/auth/signin/"
                          target="_blank"
                          sx={{ width: '100%' }}
                        >
                          Sign in
                        </Button>
                      </MenuItem>
                    </>)
                    : (
                      <>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                          <Badge badgeContent={4} color="error">
                            <MailIcon />
                          </Badge>
                        </IconButton>
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                          </Badge>
                        </IconButton>
                        <IconButton>
                          <Avatar {...stringAvatar('Himanshu Grover')} />
                        </IconButton>
                      </>
                    )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
