import {
    GET_USER_SUCCESS,
    GET_USER_ERROR
} from '../constants/userPage';

const initStates = {
    data: {},
    err: null
 };

 export const userReducer = (state = initStates, action) => {
      switch(action.type) {
          case GET_USER_SUCCESS: {
              return { ...state, data: action.payload };
          }
          case GET_USER_ERROR: {
             return { ...state, err: action.payload };
          }
          default: return state;
      }
}