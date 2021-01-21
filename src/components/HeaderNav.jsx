import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
const style = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addNew: {
    cursor: 'pointer',
  },
}));
export default function HeaderNav() {
  const classes = style();
  const addNewProfile = () => {
    console.log('click');
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Typography>
            <strong>Profile</strong>
          </Typography>
          <Typography className={classes.addNew} onClick={addNewProfile}>
            Add New
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
