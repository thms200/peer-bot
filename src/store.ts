import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers';

const middleware = [];
if(process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
