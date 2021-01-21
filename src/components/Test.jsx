import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import profileInfo from '../utils/profilesInfo';
import { TextField } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    width: 800,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
    marginTop: '16px',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Test() {
  const classes = useStyles();
  const [name, setName] = useState(profileInfo[0].name);
  const inputRef = useRef();
  useEffect(() => {
    console.log('profileInfo', profileInfo);
  }, []);
  const handleSubmit = () => {
    profileInfo[0].name = inputRef.current.value;
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" direction="column" alignItems="center">
          <Grid item>
            <Paper className={classes.paper}>
              <TextField
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <TextField
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
