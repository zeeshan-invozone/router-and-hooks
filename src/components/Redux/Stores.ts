import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './ReduxSouce/rootReducer';
export const history = createBrowserHistory();
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
};
// const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
const configureStore = (preloadedState: any) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
  // let persister = persistStore(store);
  // , persister
  return { store };
};

export default configureStore;
