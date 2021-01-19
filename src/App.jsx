import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'

function App() {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/edit" component={EditProfile} />
      </Switch>
    </Router>
  )
}

export default App
