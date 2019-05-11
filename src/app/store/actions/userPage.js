import {GET_USER_SUCCESS, GET_USER_ERROR } from '../constants/userPage';

export const getUserSuccessAction = payload =>({
    type: GET_USER_SUCCESS,
    payload: payload
});

export const getUserErrorAction = err =>({
    type: GET_USER_ERROR,
    payload: err
});