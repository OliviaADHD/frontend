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
export const newUser = (user) => async dispatch => {
  console.warn(user);
  try {
    const res = await axios.post(link+"signup", user);
    console.warn(res.data)
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.warn(err.response.data)
    dispatch({
      type: SIGN_UP_FAILED,
      payload: err.response.data
    });
  }
};
  
export const signIn = (loginData) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/signup", loginData);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SIGN_IN_FAILED,
      payload: err.response.data
    });
  }
};

export const verifyEmail = (email) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/validation/email"+email);
    dispatch({
      type: VERIFY_LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VERIFY_LOGIN_FAILED,
      payload: err.response.data
    });
  }
};

export const verifyLogin = (login) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/validation/login/"+login);
    dispatch({
      type: VERIFY_LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VERIFY_LOGIN_FAILED,
      payload: err.response.data
    });
  }
};