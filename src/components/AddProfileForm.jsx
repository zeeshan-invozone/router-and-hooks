import React, { useState, useRef, useEffect } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';
import profilesData from '../utils/profilesInfo';
import { useForm } from 'react-hook-form';
import { db } from './Firebase/firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddProfileForm({ onClose, show }) {
  useEffect(() => {
    getAllUsers();
  }, []);
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const nameRef = useRef();
  const ageRef = useRef();
  const addressRef = useRef();
  const companyRef = useRef();
  const designationRef = useRef();
  const formRef = useRef();
  // const [nameRef, ageRef, addressRef, companyRef, designationRef] = useRef();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [loader, setLoader] = useState(false);
  const [users, setUsers] = useState([]);

  const submitNewProfile = () => {
    const id = Math.floor(Math.random(1, 50) * 10);
    // console.log('formRef.current', formRef.current['name'].value);
    const newProfile = {
      id,
      name,
      age,
      designation,
      address,
      company,
    };
    console.log('allUsers users', users);
    db.collection('users')
      .add({
        name,
        age,
        designation,
        address,
        company,
      })
      .then((res) => {
        alert('user created successfully');
        console.log('User created successfully', res);
      })
      .catch((error) => {
        console.log('something went wrong', error);
      });
    profilesData.push(newProfile);
    onClose();
  };
  const getAllUsers = async () => {
    const users = await db.collection('users').get();
    const allUsers = [];
    users.forEach((doc) => {
      let user = doc.data();
      allUsers.push(user);
    });
    console.log('all', allUsers);
    setUsers(allUsers);
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
          <form
            noValidate
            ref={formRef}
            onSubmit={handleSubmit}
            autoComplete="off"
            className={classes.root}
          >
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputRef={register}
            />
            <TextField
              inputRef={register}
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
            {/* <CircularProgress color="inherit" /> */}
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
