import {
  GET_CUSTOMER_NAME,
  GET_CUSTOMER_MODE,
  INITIAL_CUSTOMER,
  CustomerActionTypes,
  CustomerState,
} from '../constants/types';

const initialState: CustomerState = {
  nickname: '',
  mode: '',
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
    default:
      return state;
  }
}
