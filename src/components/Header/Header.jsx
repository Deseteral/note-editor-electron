import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Edytor notatek
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
