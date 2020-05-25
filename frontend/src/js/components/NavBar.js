import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#eee',
    backgroundColor: '#fb4f4f',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '25px'
  },
}));


const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      {/* <AppBar position="static"> */}
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Brocations
          </Typography>
          <Button className={classes.login} color="inherit">Login</Button>
        </Toolbar>
      {/* </AppBar> */}
    </div>
  );
}

export default NavBar;