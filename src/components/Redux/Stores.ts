import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './Reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './ReduxSouce/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Redux/Sagas/index';
const sagaMiddleware = createSagaMiddleware();
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
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
  );
  // let persister = persistStore(store);
  sagaMiddleware.run(rootSaga);
  // , persister
  return { store };
};

export default configureStore;
