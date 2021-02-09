import {
  Grid,
  makeStyles,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Container,
  CircularProgress,
} from '@material-ui/core';
import React, { useState, FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../Firebase/firebase';
import { CREATE_USER_PROFILE } from '../Firebase/firebase_api';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const AdditionalInfo: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isPick, setPick] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const classes = useStyles();
  const history = useHistory();

  const name: string = formRef.current['name'].value;
  const designation: string = formRef.current['designation'].value;
  const address: string = formRef.current['address'].value;
  const age: string = formRef.current['age'].value;
  const company: string = formRef.current['company'].value;

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { uid } = firebase.auth().currentUser;
    if (uid !== null) {
      const res = await CREATE_USER_PROFILE({
        uid,
        name,
        age,
        address,
        company,
        designation,
        imageUrl,
      });
      console.log('res', res);
      history.push('/');
    }
  };
  const imageOnChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    setLoader(true);
    const file = evt.target.files[0];
    const fireRef = firebase.storage().ref();
    const fileRef = fireRef.child(file.name);
    await fileRef.put(file);
    const finalUrl = await fileRef.getDownloadURL();
    setImageUrl(finalUrl);
    setPick(true);
    setLoader(false);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Additional Info
          </Typography>
          {loader && <CircularProgress />}
          <div className="image-upload">
            <label htmlFor="file-input">
              {isPick ? (
                <img src={imageUrl} style={{ width: '100px', height: '100px' }} />
              ) : (
                <img
                  src="https://placehold.it/100/000000/ffffff?text=UPLOAD"
                  style={{ cursor: 'pointer' }}
                />
              )}
            </label>

            <input
              id="file-input"
              type="file"
              style={{ display: 'none' }}
              onChange={imageOnChange}
            />
          </div>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="text"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="company"
                  label="Company"
                  type="text"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="designation"
                  label="Designation"
                  type="text"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Profile Done
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
