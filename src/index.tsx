import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './components/Redux/Stores';
const config = configureStore();
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={config.store}>
      {/* <PersistGate loading="null" persistor={config.persister}> */}
      {/* <ConnectedRouter history={history}> */}
      <App />
      {/* </ConnectedRouter> */}
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
