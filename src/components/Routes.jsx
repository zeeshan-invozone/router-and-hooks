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
import TextAssignment from './Assignment/TextAssignment';
export default function Routes() {
  return (
    <div>
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={ReactTable} />
          <Route exact path="/edit" component={EditProfile} />
          <Route exact path="/remove-tag" component={RemoveDefault} />
          <Route exact path="/styled-component" component={HelloWorld} />
          <Route exact path="/assignment" component={TextAssignment} />
        </Switch>
      </Router>
    </div>
  );
}
