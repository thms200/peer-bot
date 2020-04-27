import Peer from 'simple-peer';
import {
  CONNECT_SOCKET,
  INITAIL_SOCKET,
  CONNECT_CUSTOMER_STREAM,
  CONNECT_CONSULTANT_STREAM,
  GET_PEER,
  INITAIL_STREAM_PEER,
  GET_CUSTOMER_NAME,
  GET_CUSTOMER_MODE,
  INITIAL_CUSTOMER,
  SET_REQUEST,
  SocketActionTypes,
  StreamActionTypes,
  CustomerActionTypes,
} from '../constants/types';

export function connectSocket(socket: SocketIOClient.Socket): SocketActionTypes {
  return {
    type: CONNECT_SOCKET,
    socket,
  };
}

export function initialSocket(): SocketActionTypes {
  return {
    type: INITAIL_SOCKET,
  };
}

export function connectCustomerStream(customerStream: MediaStream): StreamActionTypes {
  return {
    type: CONNECT_CUSTOMER_STREAM,
    customerStream,
  };
}

export function connectConsultantStream(consultantStream: MediaStream): StreamActionTypes {
  return {
    type: CONNECT_CONSULTANT_STREAM,
    consultantStream,
  };
}


export function getPeer(peer: Peer.Instance): StreamActionTypes {
  return {
    type: GET_PEER,
    peer,
  };
}

export function initialStreamPeer(): StreamActionTypes {
  return {
    type: INITAIL_STREAM_PEER,
  };
}

export function getCustomerName(nickname: string): CustomerActionTypes {
  return {
    type: GET_CUSTOMER_NAME,
    nickname,
  };
}

export function getCustomerMode(mode: string): CustomerActionTypes {
  return {
    type: GET_CUSTOMER_MODE,
    mode,
  };
}

export function initailCustomer(): CustomerActionTypes {
  return {
    type: INITIAL_CUSTOMER,
  };
}

export function setRequet(isRequest: boolean): CustomerActionTypes {
  return {
    type: SET_REQUEST,
    isRequest,
  };
}
