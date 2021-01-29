import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { db, firebaseConfig } from './Firebase/firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 350,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: '16px',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridMain: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  control: {
    padding: theme.spacing(2),
  },
  editIcon: {
    cursor: 'pointer',
  },
  items: {
    paddingBottom: '2rem',
  },
}));

export default function Profile() {
  const [pData, setPdata] = useState('');
  const classes = useStyles();
  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    const { uid } = firebaseConfig.auth().currentUser;
    const user = await db.collection('users').get();
    const profiles = [];
    user.forEach((doc) => {
      const profile = doc.data();
      profiles.push(profile);
    });
    const finalP = profiles.filter((item) => {
      return item.uid === uid;
    });
    console.log('file', finalP);
    setPdata(finalP);
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} className={classes.gridMain}>
        <Paper className={classes.paper} elevation={5}>
          <Grid container className={classes.items}>
            <Grid item xs={12} className={classes.gridItem} my={3}>
              <Typography>
                <strong></strong>
              </Typography>
              {/* <ShowBadge /> */}
              <EditIcon color="error" className={classes.editIcon} />
            </Grid>
            {pData.length > 0 &&
              pData.map((elem, index) => (
                <Grid container key={index}>
                  <Grid item xs={12} className="mt-3 mb-5">
                    <img
                      src={elem.imgUrl}
                      alt="profile-image"
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem} my={3}>
                    <Typography>
                      <strong>Name</strong>
                    </Typography>
                    <Typography>
                      <strong>{elem.name}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem} my={3}>
                    <Typography>
                      <strong>Age</strong>
                    </Typography>
                    <Typography>
                      <strong>{elem.age}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem} my={3}>
                    <Typography>
                      <strong>Address</strong>
                    </Typography>
                    <Typography>
                      <strong>{elem.address}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem} my={3}>
                    <Typography>
                      <strong>Company</strong>
                    </Typography>
                    <Typography>
                      <strong>{elem.company}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridItem} my={3}>
                    <Typography>
                      <strong>Designation</strong>
                    </Typography>
                    <Typography>
                      <strong>{elem.designation}</strong>
                    </Typography>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
