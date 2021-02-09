import React, { useRef, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import firebase from '../Firebase/firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const CloudFunctions: React.FC = () => {
  const [fullName, setFullName] = useState<string>(null);
  const classes = useStyles();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const fName = formRef.current['firstname'].value;
    const lName = formRef.current['lastname'].value;
    console.log(fName, lName);
    const fullName = firebase.functions().httpsCallable('getFullName');
    const res = await fullName({ fName, lName });
    if (res) {
      setFullName(res.data.fullName);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Cloud Functions
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
          ref={formRef}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="lastname"
            label="LastName"
            type="lastname"
            id="lastname"
            autoComplete="lastname"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <div>{fullName}</div>
    </Container>
  );
};

export default CloudFunctions;
