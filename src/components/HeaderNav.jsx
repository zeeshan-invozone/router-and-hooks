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
            <Link to="/">
              <strong>Profile</strong>
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
