import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseConfig, db } from '../Firebase/firebase';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
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
export default function AdditionalInfo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [imgUrl, setImageUrl] = useState('');
  const [isPick, setPick] = useState(false);
  const [loader, setLoader] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { uid } = firebaseConfig.auth().currentUser;
    if (uid !== null) {
      console.log(name, age, address, designation, company);
      db.collection('users')
        .add({
          uid,
          name,
          age,
          address,
          designation,
          company,
          imgUrl,
        })
        .then((res) => {
          console.log('res', res);
          history.push('/');
        })
        .catch((error) => {
          console.log('error while adding additional info', error);
        });
    }
  };
  const imageOnChange = async (e) => {
    setLoader(true);
    const file = e.target.files[0];
    const fireRef = firebaseConfig.storage().ref();
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
                <img src={imgUrl} style={{ width: '100px', height: '100px' }} />
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
          {/* <span>
            <PersonAddRoundedIcon />
            <input type='file' style={{ display: 'none' }} />
          </span> */}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setAge(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setCompany(e.target.value)}
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
                  onChange={(e) => setDesignation(e.target.value)}
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
}
