import {
  GET_CUSTOMER_NAME,
  GET_CUSTOMER_MODE,
  INITIAL_CUSTOMER,
  SET_REQUEST,
  CustomerActionTypes,
  CustomerState,
} from '../constants/types';

const initialState: CustomerState = {
  nickname: '',
  mode: '',
  isRequest: false,
};

export function customer(state = initialState, action: CustomerActionTypes) {
  switch(action.type) {
    case GET_CUSTOMER_NAME:
      return {
        ...state,
        nickname: action.nickname,
      };
    case GET_CUSTOMER_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    case INITIAL_CUSTOMER:
      return {
        ...state,
        nickname: '',
        mode: '',
      };
    case SET_REQUEST:
      return {
        ...state,
        isRequest: action.isRequest,
      };
    default:
      return state;
  }
}
