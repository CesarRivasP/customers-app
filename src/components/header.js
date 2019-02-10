import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';


const styles = {
  root: {
    // flexGrow: 1,
    background: 'linear-gradient(to right, #1e3c72, #2a5298)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: '60',
    width: '100%'
    // padding: '0 15px',
    // boxShadow: '0 3px 5px 2px rgba(58, 58, 58, .1)',
  },
};

 const Header = (props) => {
  const { classes, className, ...other } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classNames(classes.root, className)} {...other}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Customer App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
