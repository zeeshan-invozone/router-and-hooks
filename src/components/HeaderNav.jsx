import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddProfileForm from './AddProfileForm';

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
  const [open, setOpen] = useState(false);
  const classes = style();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          <Typography className={classes.addNew} onClick={handleOpen}>
            Add New
          </Typography>
        </Toolbar>

        {open && <AddProfileForm show={open} onClose={handleClose} />}
      </AppBar>
    </div>
  );
}
