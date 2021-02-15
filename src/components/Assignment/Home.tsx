import React, { FC, ReactElement, useState } from 'react';
import ProfileCard from './ProfileCard';
import profileData from '../../utils/profilesInfo';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '16px',
  },
}));
const Home: FC<{ data: any }> = ({ data = profileData }): ReactElement => {
  const [pData, setPData] = useState(data);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {pData.length > 0 &&
        pData.map((p, index) => (
          <div key={index}>
            <ProfileCard profile={p} />
          </div>
        ))}
    </div>
  );
};

export default Home;
