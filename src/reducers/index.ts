import { combineReducers } from 'redux';
import { socket } from './socket';
import { customer } from './customer';

export const rootReducer = combineReducers({
  socket,
  customer,
});

export type RootState = ReturnType<typeof rootReducer>
