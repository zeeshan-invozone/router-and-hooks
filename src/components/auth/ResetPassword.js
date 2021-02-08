import React, { useEffect, useState } from 'react';
const queryString = require('query-string');
import firebase from '../Firebase/firebase';
import { useHistory } from 'react-router-dom';
const ResetPassword = (props) => {
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const [code, setCode] = useState('');
  const history = useHistory();

  useEffect(() => {
    const params = queryString.parse(props.location.search);
    setCode(params.oobCode);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await firebase.auth().confirmPasswordReset(code, password);
    history.push('/login');
  };

  return (
    <div>
      <h5>Reset Password</h5>
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="confirm-password"
        type="password"
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ResetPassword;
