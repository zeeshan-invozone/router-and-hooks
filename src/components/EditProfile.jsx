import React, { useRef, useState } from 'react';
import { TextField, makeStyles, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import fileData from '../utils/profilesInfo';
import Profile from '../components/Profile';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    width: '30%',
    margin: 'auto',
    textAlign: 'center',
    marginTop: '2rem',
  },
  btn: {
    '&.MuiButtonBase-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function EditProfile() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [isAdd, setIsAdd] = useState(false);
  const nameRef = useRef();
  const ageRef = useRef();
  const addressRef = useRef();
  const companyRef = useRef();
  const designationRef = useRef();
  const formRef = useRef();
  const updateRef = useRef();
  const addPRef = useRef();

  const { name, age, designation, company, address, id } = location.state.data;
  console.log('data', location.state.data);
  console.log('index', location.state.index);
  const [names, setName] = useState(name);
  const [ages, setAge] = useState(age);
  const [designations, setDesignation] = useState(designation);
  const [addresss, setAddress] = useState(address);
  const [companys, setCompany] = useState(company);

  const updateProfile = () => {
    fileData[id].name = nameRef.current.value;
    fileData[id].age = ageRef.current.value;
    fileData[id].address = addressRef.current.value;
    fileData[id].designation = designationRef.current.value;
    fileData[id].company = companyRef.current.value;

    history.push('/');
  };
  const handleAddProfile = () => {
    setName('');
    setAge('');
    setCompany('');
    setDesignation('');
    setAddress('');
    setIsAdd(true);
    updateRef.current.remove();
    addPRef.current.remove();
  };
  const handleAddNewProfile = () => {
    const pid = Math.floor(Math.random(1, 20) * 10);
    const newP = {
      id: pid,
      name: names,
      age: ages,
      designation: designations,
      company: companys,
      address: addresss,
    };
    fileData.push(newP);
    history.push('/');
  };

  return (
    <div>
      <form noValidate ref={formRef} autoComplete="off" className={classes.root}>
        <TextField
          inputRef={nameRef}
          id="name"
          label="Name"
          value={names}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          inputRef={ageRef}
          id="age"
          label="Age"
          value={ages}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          inputRef={designationRef}
          id="designation"
          label="Designation"
          value={designations}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <TextField
          inputRef={companyRef}
          id="company"
          label="Company"
          value={companys}
          onChange={(e) => setCompany(e.target.value)}
        />
        <TextField
          inputRef={addressRef}
          id="address"
          label="Address"
          value={addresss}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          ref={updateRef}
          onClick={updateProfile}
        >
          Update
        </Button>
        <Button
          className={classes.btn}
          variant="contained"
          onClick={handleAddProfile}
          ref={addPRef}
        >
          Add Profile
        </Button>
        {isAdd && (
          <Button
            className={classes.btn}
            variant="contained"
            onClick={handleAddNewProfile}
          >
            Add
          </Button>
        )}
      </form>
      <div>
        <Profile />
      </div>
    </div>
  );
}
