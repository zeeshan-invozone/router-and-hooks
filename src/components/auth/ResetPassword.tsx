import React, { FormEvent, useState } from 'react';
import { Grid, Typography, TextField, Button, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { RESET_PASSWORD } from '../Firebase/firebase_api';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>(null);
  const [confPassword, setConfPassword] = useState<string>(null);
  const history = useHistory();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    var url_string = window.location.search;
    const urlParams = new URLSearchParams(url_string);
    const code = urlParams.get('oobCode');
    if (password === confPassword) {
      await RESET_PASSWORD({ code, password });
      alert('Password reset Successfully');
      history.push('/login');
    } else {
      console.log('password does not matched');
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="off"
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="conf-password"
            label="confirm-Password"
            type="conf-password"
            id="conf-password"
            autoComplete="off"
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Done
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
