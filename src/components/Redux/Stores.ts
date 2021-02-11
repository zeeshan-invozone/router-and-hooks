import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './Reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
export const history = createBrowserHistory();

const configureStore = (preloadedState: any) => {
  // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
  );
  return store;
};

export default configureStore;

// export const store = createStore(allReducer, composeWithDevTools());
