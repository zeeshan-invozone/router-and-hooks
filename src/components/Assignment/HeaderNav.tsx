import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import firebase from '../Firebase/firebase';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SIGN_OUT } from '../Firebase/firebase_api';

const style = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addNew: {
    cursor: 'pointer',
  },
  profile: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
      color: 'white',
    },
  },
}));
const HeaderNav = () => {
  const dispatch = useDispatch();
  const classes = style();
  const handleSignOut = async () => {
    const res = await SIGN_OUT();
    dispatch({ type: 'LOGOUT' });
    console.log('signout ');
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Typography>
                <Link to="/" className={classes.profile}>
                  <strong>Profile</strong>
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              className="d-flex justify-content-around align-items-center"
            >
              <Typography>
                <Link className={classes.profile} to="/styled-component">
                  Styled
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.profile} to="/assignment">
                  Assignment
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.profile} to="/view-profile">
                  ViewProfile
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.profile} to="/sorting">
                  Sorting
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.profile} to="/cloud-func">
                  Cloud Functions
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.profile} to="/redux-example">
                  Redux
                </Link>
              </Typography>

              <Button color="inherit" onClick={handleSignOut}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default HeaderNav;
