import React, { useState, useRef } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
} from '@material-ui/core';
import profilesData from '../utils/profilesInfo';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddProfileForm({ onClose, show }) {
  const classes = useStyles();
  const { nameRef, ageRef, addressRef, companyRef, designationRef } = useRef();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');

  const submitNewProfile = () => {
    const newProfile = {
      name,
      age,
      designation,
      address,
      company,
    };
    profilesData.push(newProfile);
    console.log('profileData', profilesData);
  };
  return (
    <>
      <Dialog
        open={show}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className="text-center">
            <h5 className="dark-grey-text mb-4">
              <strong>New Profile</strong>
            </h5>
          </div>
          <form noValidate autoComplete="off" className={classes.root}>
            <TextField
              inputRef={nameRef}
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={name === ''}
              helperText={name === '' ? 'Name is required' : ' '}
            />
            <TextField
              inputRef={ageRef}
              id="age"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <TextField
              inputRef={designationRef}
              id="designation"
              label="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <TextField
              inputRef={companyRef}
              id="company"
              label="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <TextField
              inputRef={addressRef}
              id="address"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={submitNewProfile}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
