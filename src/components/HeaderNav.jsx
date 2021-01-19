import React from 'react'
import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
const style = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    textDecoration: 'none',
    color: 'white',
  },
  editprofile: {
    textDecoration: 'none',
    color: 'white',
    paddingLeft: '20px',
  },
}))
export default function HeaderNav() {
  const classes = style()
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <NavLink to="/" className={classes.profile}>
            Profile
          </NavLink>

          <NavLink to="/edit" className={classes.editprofile}>
            EditProfile
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}
