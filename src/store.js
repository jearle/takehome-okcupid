import { 
  createStore as createReduxStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './madlibs';
import sagas from './sagas';

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createReduxStore(
    reducer,
    applyMiddleware(sagaMiddleware));

  sagas.map(sagaMiddleware.run);

  if (process.env.NODE_ENV === 'development') {
    window.__STORE__ = store;
  }

  return store;
}