import {
  CONNECT_SOCKET,
  INITAIL_SOCKET,
  GET_CUSTOMER_NAME,
  GET_CUSTOMER_MODE,
  INITIAL_CUSTOMER,
  SET_REQUEST,
  SocketActionTypes,
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
