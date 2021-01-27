import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import Home from '../components/Home';
import Profile from '../components/Profile';
import AllProfiles from '../components/AllProfiles';
import EditProfile from '../components/EditProfile';
import HelloWorld from './StyledComponents/HelloWorld';
import RemoveDefault from './ReactSelect/RemoveDefault';
import ReactTable from './ReactTable7/ReactTable';
export default function Routes() {
  return (
    <div>
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={RemoveDefault} />
          <Route exact path="/edit" component={EditProfile} />
          <Route exact path="/react-table" component={ReactTable} />
          <Route exact path="/styled-component" component={HelloWorld} />
        </Switch>
      </Router>
    </div>
  );
}
