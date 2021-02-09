import React, { FormEvent, useCallback, useContext, useRef } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import firebase from '../Firebase/firebase';
import { AuthContext } from './Authentication';
import { SIGN_IN } from '../Firebase/firebase_api';
import {
  Grid,
  makeStyles,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SignIn = ({ history }) => {
  const classes = useStyles();
  const formRef = useRef<HTMLFormElement>(null);
  const handleLogin = useCallback(
    async (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      const email = formRef.current['email'].value;
      const password = formRef.current['password'].value;

      const res = await SIGN_IN({ email, password });
      const cu = await firebase.auth().currentUser;
      if (cu) {
        alert('Login Successfully');
        history.push('/');
      } else {
        alert(res);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/react-table" />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={handleLogin}
          className={classes.form}
          noValidate
          ref={formRef}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
