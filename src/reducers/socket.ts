import {
  CONNECT_SOCKET,
  INITAIL_SOCKET,
  SocketActionTypes,
  SocketState
} from '../constants/types';

const initialState: SocketState = {
  socket: null
};

export function socket(state = initialState, action: SocketActionTypes) {
  switch(action.type) {
    case CONNECT_SOCKET:
      return {
        ...state,
        socket: action.socket,
      };
    case INITAIL_SOCKET:
      return {
        ...state,
        socket: null,
      };
    default:
      return state;
  }
}
