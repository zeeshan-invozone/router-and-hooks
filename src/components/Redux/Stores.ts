import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './Reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
export const history = createBrowserHistory();

const configureStore = (preloadedState: any) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
  return store;
};

export default configureStore;
