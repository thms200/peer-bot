import { combineReducers } from 'redux';
import { socket } from './socket';
import { customer } from './customer';
import { stream } from './stream';

export const rootReducer = combineReducers({
  socket,
  customer,
  stream,
});

export type RootState = ReturnType<typeof rootReducer>
