import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
const style = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
export default function HeaderNav() {
  const classes = style();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography>
            <strong>Profile</strong>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
