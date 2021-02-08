import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import profileData from '../utils/profilesInfo';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '16px',
  },
}));
const Home = () => {
  const [pData, setPData] = useState(profileData);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {pData.length > 0 &&
        pData.map((p, index) => (
          <div key={index}>
            <ProfileCard p={p} />
          </div>
        ))}
    </div>
  );
};

export default Home;
