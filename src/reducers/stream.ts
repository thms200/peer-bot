import {
  CONNECT_CUSTOMER_STREAM,
  CONNECT_CONSULTANT_STREAM,
  GET_PEER,
  INITAIL_STREAM_PEER,
  StreamActionTypes,
  StreamState
} from '../constants/types';

const initialState: StreamState = {
  customerStream: null,
  consultantStream: null,
  peer: null,
};

export function stream(state = initialState, action: StreamActionTypes) {
  switch(action.type) {
    case CONNECT_CUSTOMER_STREAM:
      return {
        ...state,
        customerStream: action.customerStream,
      };
    case CONNECT_CONSULTANT_STREAM:
      return {
        ...state,
        consultantStream: action.consultantStream,
      };
    case GET_PEER:
      return {
        ...state,
        peer: action.peer,
      };
    case INITAIL_STREAM_PEER:
      return {
        ...state,
        customerStream: null,
        consultantStream: null,
        peer: null,
      };
    default:
      return state;
  }
}
