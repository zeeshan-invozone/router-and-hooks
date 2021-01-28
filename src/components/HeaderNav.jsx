import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
export default function HeaderNav() {
  const classes = style();
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
            <Grid item xs={6} className="d-flex justify-content-around">
              <Typography>
                <Link className={classes.profile} to="/remove-tag">
                  Remove Tags
                </Link>
              </Typography>
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
