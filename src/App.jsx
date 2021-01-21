import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
