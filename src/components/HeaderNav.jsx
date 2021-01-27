import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
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
  },
}));
export default function HeaderNav() {
  const classes = style();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Typography>
            <Link to="/" className={classes.profile}>
              <strong>Profile</strong>
            </Link>
          </Typography>
          <Typography>
            <Link className={classes.profile} to="/react-table">
              React Table
            </Link>
          </Typography>
          <Typography>
            <Link className={classes.profile} to="/styled-component">
              Styled
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
