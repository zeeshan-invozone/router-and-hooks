import React, { FunctionComponent } from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    padding: '10px',
    backgroundColor: 'black',
    margin: '5px',
  },
  media: {
    height: 240,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  avatarPosition: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  devLevel: {
    backgroundColor: 'green',
    display: 'inline',
    padding: '0 5px',
    color: 'white',
  },
}));

type ProfileProp = {
  profile: any;
};

const ProfileCard: FunctionComponent<ProfileProp> = ({ profile }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleSeeMore = () => {
    history.push('/edit');
  };
  return (
    <>
      <Card className={classes.root}>
        <Typography className={classes.devLevel}>
          <strong>Expert</strong>
        </Typography>
        <CardActionArea>
          <CardMedia className={classes.avatarPosition}>
            <Avatar
              alt="Remy Sharp"
              src="https://png.pngtree.com/png-vector/20190629/ourmid/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg"
              className={classes.large}
            />
          </CardMedia>
          <CardContent className={classes.avatarPosition}>
            <Typography gutterBottom variant="h5" component="h2">
              {profile.name}
            </Typography>
            <Typography component="p">{profile.address}</Typography>
            <Typography variant="body2" component="p" className="text-center">
              {profile.designation}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleSeeMore}>
            View Profile
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default ProfileCard;
