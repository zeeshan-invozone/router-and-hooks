import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import profileInfo from '../utils/profilesInfo';
import { Typography, Chip } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import GeneralInfo from './EditProfileModal/GeneralInfo';
import Skills from './EditProfileModal/Skills';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 650,
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
  },
  control: {
    padding: theme.spacing(2),
  },
  editIcon: {
    cursor: 'pointer',
  },
}));

const useStyle = makeStyles(() => ({
  editIcon: {
    cursor: 'pointer',
  },
  begeinner: {
    color: 'white',
    backgroundColor: 'blue',
  },
  mediocar: {
    color: 'white',
    backgroundColor: 'yellow',
  },
  experts: {
    color: 'white',
    backgroundColor: 'green',
  },
}));

export default function Test() {
  const [skills, setSkill] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const [info, setInfo] = useState({
    fname: 'zeeshan',
    designation: 'Developer',
    age: 22,
    address: 'Gujranwala',
    company: '03120876342',
  });
  useEffect(() => {
    getGeneralInfo();
    getSkills();
  }, []);
  const handleInfoOpen = () => {
    setOpen(true);
  };
  const handleInfoClose = () => {
    setOpen(false);
  };
  const handleSkillOpen = () => {
    setOpenSkill(true);
  };
  const handleSkillClose = () => {
    getSkills();
    setOpenSkill(false);
  };

  const ShowBadge = () => {
    const styles = useStyle();
    return (
      <>
        {skills.length <= 4 ? (
          <Typography className={styles.begeinner}>Beginner</Typography>
        ) : skills.length <= 7 ? (
          <Typography className={styles.mediocar}>Mediocar</Typography>
        ) : (
          <Typography className={styles.experts}>Expert</Typography>
        )}
      </>
    );
  };
  const getGeneralInfo = () => {
    const gf = localStorage.getItem('generalinfo');
    setInfo(JSON.parse(gf));
  };
  const getSkills = () => {
    const skl = localStorage.getItem('skills');
    if (skl) {
      const arr = skl.split(',');
      const newArr = [];
      arr.forEach((ele) => {
        const obj = {};
        obj.value = ele;
        obj.name = ele;
        newArr.push(obj);
      });
      setSkill(newArr);
    } else {
      setSkill('');
    }
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} className={classes.gridMain}>
        <Paper className={classes.paper} elevation={5}>
          <Grid container className={classes.items}>
            <Grid item xs={12} className={classes.gridItem} m={3}>
              <Typography>
                <strong>General Information</strong>
              </Typography>
              <EditIcon
                color="error"
                className={classes.editIcon}
                onClick={handleInfoOpen}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography>
                <strong>Name</strong>
              </Typography>
              <Typography>{info.fname}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography>
                <strong>Address</strong>
              </Typography>
              <Typography>{info.address}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography>
                <strong>Designation</strong>
              </Typography>
              <Typography>{info.designation}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography>
                <strong>Age</strong>
              </Typography>
              <Typography>{info.age}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography>
                <strong>Company</strong>
              </Typography>
              <Typography>{info.company}</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.items}>
            <Grid item xs={12} className={classes.gridItem} my={3}>
              <Typography>
                <strong>Skills</strong>
              </Typography>
              <ShowBadge />
              <EditIcon
                color="error"
                className={classes.editIcon}
                onClick={handleSkillOpen}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              {skills.length > 0
                ? skills.map((skill, index) => (
                    <span key={index} className="pr-2 pb-2 mb-2">
                      <Chip label={skill.name} color="primary" size="small" />
                    </span>
                  ))
                : 'Skills Not Added Yet'}
            </Grid>
          </Grid>
        </Paper>
        {open && <GeneralInfo show={open} onClose={handleInfoClose} />}
        {openSkill && <Skills show={openSkill} onClose={handleSkillClose} />}
      </Grid>
    </Grid>
  );
}
