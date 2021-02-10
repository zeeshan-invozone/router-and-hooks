import './App.css';
import React from 'react';
import Routes from './components/Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './components/Redux/Reducers';
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
