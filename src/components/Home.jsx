import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import profileData from '../utils/profilesInfo';
import { makeStyles } from '@material-ui/core';
import AddProfileForm from './AddProfileForm';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '16px',
  },
}));
export default function Home() {
  const [pData, setPData] = useState(profileData);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log('open');
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {pData.length > 0 &&
        pData.map((p, index) => (
          <div key={index}>
            <ProfileCard p={p} />
          </div>
        ))}
      <div onClick={handleOpen}>Open</div>
      {open && <AddProfileForm show={open} onClose={handleClose} />}
    </div>
  );
}
