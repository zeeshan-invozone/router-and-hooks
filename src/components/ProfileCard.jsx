import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
}));

export default function ProfileCard({ p }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <div className="text-white">Beginner</div>
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
              {p.name}
            </Typography>
            <Typography component="p">{p.address}</Typography>
            <Typography variant="body2" component="p" className="text-center">
              {p.designation}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            See More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
