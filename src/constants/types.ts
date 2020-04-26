// [socket]
export const CONNECT_SOCKET = 'CONNECT_SOCKET';
export const INITAIL_SOCKET = 'INITAIL_SOCKET';

export interface SocketState {
  socket: null | SocketIOClient.Socket;
}

interface ConnectSocket {
  type: typeof CONNECT_SOCKET,
  socket: SocketIOClient.Socket,
}

interface IntialSocket {
  type: typeof INITAIL_SOCKET,
}

export type SocketActionTypes = ConnectSocket | IntialSocket;

// [customer]
export const GET_CUSTOMER_NAME = 'GET_CUSTOMER_NAME';
export const GET_CUSTOMER_MODE = 'GET_CUSTOMER_MODE';
export const INITIAL_CUSTOMER = 'INITIAL_CUSTOMER';
export const SET_REQUEST = 'SET_REQUEST';

export interface CustomerState {
  nickname: string;
  mode: string;
  isRequest: boolean;
}

interface GetCustomerName {
  type: typeof GET_CUSTOMER_NAME,
  nickname: string,
}

interface GetCustomerMode {
  type: typeof GET_CUSTOMER_MODE,
  mode: string,
}

interface InitailCustomer {
  type: typeof INITIAL_CUSTOMER,
}

interface SetRequest {
  type: typeof SET_REQUEST,
  isRequest: boolean,
}

export type CustomerActionTypes = GetCustomerName | GetCustomerMode | InitailCustomer | SetRequest;
