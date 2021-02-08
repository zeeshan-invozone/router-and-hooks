import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';
import EditProfile from '../components/EditProfile';
import HelloWorld from './StyledComponents/HelloWorld';
import ReactTable from './ReactTable7/ReactTable';
import TextAssignment from './Assignment/TextAssignment';
import { AuthProvider } from './auth/Authentication';
import firebase from './Firebase/firebase';
import Login from './auth/SignIn';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import AdditionalInfo from './auth/AdditionalInfo';
import PrivateRoute from './auth/PrivateRoute';
import Profile from './Profile';
import Sorting from './Sorting/Sorting';
import ResetPassword from './auth/ResetPassword';
import CloudFunctions from './CouldFunc/CloudFunctions';
const Routes = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    authListener();
  }, []);
  const authListener = () => {
    firebase.auth().onAuthStateChanged((users) => {
      if (users) {
        setUser(users);
      } else {
        setUser(null);
      }
    });
  };
  return (
    <AuthProvider>
      <Router>
        {user && <HeaderNav />}
        <Switch>
          <PrivateRoute exact path="/" component={ReactTable} />
          <PrivateRoute exact path="/edit" component={EditProfile} />
          <PrivateRoute exact path="/styled-component" component={HelloWorld} />
          <PrivateRoute exact path="/assignment" component={TextAssignment} />
          <PrivateRoute exact path="/view-profile" component={Profile} />
          <PrivateRoute exact path="/sorting" component={Sorting} />
          <PrivateRoute exact path="/cloud-func" component={CloudFunctions} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/step-2" component={AdditionalInfo} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password" component={ResetPassword} />
          {/* <Route exact path="/register" component={Signup} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Routes;
