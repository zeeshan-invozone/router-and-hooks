import React, { useState, useRef, useEffect } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
} from '@material-ui/core';
import profilesData from '../utils/profilesInfo';
import { useForm } from 'react-hook-form';
import firebase from './Firebase/firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  dialog: {
    maxWidth: '350px',
    minWidth: '350px',
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
}));

const AddProfileForm = ({ onClose, show }) => {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  const formRef = useRef();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const fire = firebase.firestore();
  const onSubmits = () => {
    const newProfile = {
      name,
      age,
      designation,
      address,
      company,
    };
    // const realUser = firebaseConfig.database().ref('User');
    // realUser.push(newProfile);
    fire
      .collection('users')
      .add({
        name,
        age,
        designation,
        address,
        company,
      })
      .then((res) => {
        alert('user created successfully');
        console.log('res', res);
      })
      .catch((error) => {
        console.log('something went wrong', error);
      });
    onClose();
  };
  const Error = ({ name }) => {
    return <div className={classes.error}>{name}</div>;
  };
  return (
    <>
      <Dialog
        open={show}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialog}
      >
        <DialogContent>
          <div className="text-center">
            <h5 className="dark-grey-text mb-4">
              <strong>New Profile</strong>
            </h5>
          </div>
          <form
            onSubmit={handleSubmit(onSubmits)}
            autoComplete="off"
            className={classes.root}
            ref={formRef}
          >
            <TextField
              name="nam"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputRef={register({ required: true })}
              helperText={errors.nam ? <Error name="name is required" /> : ''}
            />
            <TextField
              inputRef={register({ required: true })}
              name="ag"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              helperText={errors.ag ? <Error name="age is required" /> : ''}
            />
            <TextField
              inputRef={register({ required: true })}
              name="desig"
              label="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              helperText={
                errors.desig ? <Error name="designation is required" /> : ''
              }
            />
            <TextField
              inputRef={register({ required: true })}
              name="com"
              label="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              helperText={errors.com ? <Error name="company is required" /> : ''}
            />
            <TextField
              inputRef={register({ required: true })}
              name="add"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              helperText={errors.add ? <Error name="address is required" /> : ''}
            />
            <input
              type="submit"
              className="mt-3"
              style={{ backgroundColor: 'blue', color: 'white', padding: '3px 5px' }}
            />
          </form>
        </DialogContent>
        {/* <DialogActions>
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};
export default AddProfileForm;
