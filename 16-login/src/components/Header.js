import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const Header = () => {
  return (
    <AppBar position='static' color='secondary'>
      <Toolbar>
        <AllInclusiveIcon fontSize='large' />
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, textAlign: 'center' }}
        >
          Enter Your Details
        </Typography>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
