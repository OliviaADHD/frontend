import { SIGN_UP, 
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    VERIFY_EMAIL,
    VERIFY_EMAIL_SUCCESS,
    VERIFY_EMAIL_FAILED,
    VERIFY_LOGIN, 
    VERIFY_LOGIN_FAILED,
    VERIFY_LOGIN_SUCCESS
  } from "../types";
import axios from "axios";
import {link} from '../../config/config'

export const beforeSignUP = () => async dispatch => {
  dispatch({
    type: SIGN_UP,
    payload: undefined
  });
};

export const newUser = (user) => async dispatch => {
  try {
    const res = await axios.post(link+"signup", user);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: {
        text: res.data,
        code: res.status
      }
    });
  } catch (err) {
    console.warn(err)
    dispatch({
      type: SIGN_UP_FAILED,
      payload: {
        text: err.response.data,
        code: err.response.status
      }
    });
  }
};
  
export const signIn = (loginData) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/signup", loginData);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: {
        text: res.data,
        code: res.status
      }
    });
  } catch (err) {
    dispatch({
      type: SIGN_IN_FAILED,
      payload: {
        text: err.response.data,
        code: err.response.status
      }
    });
  }
};

export const verifyEmail = (email) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/validation/email"+email);
    dispatch({
      type: VERIFY_LOGIN_SUCCESS,
      payload: {
        text: res.data,
        code: res.status
      }
    });
  } catch (err) {
    dispatch({
      type: VERIFY_LOGIN_FAILED,
      payload: {
        text: err.response.data,
        code: err.response.status
      }
    });
  }
};

export const verifyLogin = (login) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/validation/login/"+login);
    dispatch({
      type: VERIFY_LOGIN_SUCCESS,
      payload: {
        text: res.data,
        code: res.status
      }
    });
  } catch (err) {
    dispatch({
      type: VERIFY_LOGIN_FAILED,
      payload: {
        text: err.response.data,
        code: err.response.status
      }
    });
  }
};