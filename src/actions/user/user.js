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
    VERIFY_LOGIN_SUCCESS,
  } from "../types";
import axios from "axios";
import {link} from '../../config/config'

export const beforeSignUP = () => async dispatch => {
  dispatch({
    type: SIGN_UP,
    payload: {}
  });
};

export const beforeSignIn = () => async dispatch => {
  dispatch({
    type: SIGN_IN,
    payload: {}
  });
};

export const beforeValidEmail = () => async dispatch => {
  dispatch({
    type: VERIFY_EMAIL,
    payload: {}
  });
};

export const beforeValidLogin = () => async dispatch => {
  dispatch({
    type: VERIFY_LOGIN,
    payload: {}
  });
};


export const newUser = (user) => async dispatch => {
  try {
    const res = await axios.post(link+"signup", user);
    console.log(res.data.name);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: {
        passed:true,
        userId: res.data.userId,
        name: res.data.name,
      }
    });
  } catch (err) {
    console.warn("error: " + err)
    dispatch({
      type: SIGN_UP_FAILED,
      payload: {
        passed:false,
        error: "Sign up failed",
      }
    });
  }
};
  
export const signIn = (loginData) => async dispatch => {
  try {
    console.log(loginData);
    const res = await axios.get(link + "login2/"+loginData.email+"/"+loginData.password);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: {
        passed:true,
        userId: res.data.userId,
        name: res.data.name,
        firstTime: res.data.firstTime
      }
    });
  } catch (err) {
    dispatch({
      type: SIGN_IN_FAILED,
      payload: {
        passed:false,
        error: "Login failed",
      }
    });
  }
};

export const verifyEmail = (email) => async dispatch => {
  try {
    const res = await axios.post(link+"validation/email/"+email);
    dispatch({
      type: VERIFY_EMAIL_SUCCESS,
      payload: {
        passed:true
      }
    });
  } catch (err) {
    dispatch({
      type: VERIFY_EMAIL_FAILED,
      payload: {
        passed: false,
        text: "Email exists"
      }
    });
  }
};

export const verifyLogin = (login) => async dispatch => {
  try {
    const res = await axios.post(link+"validation/login/"+login);
    dispatch({
      type: VERIFY_LOGIN_SUCCESS,
      payload: {
        passed:true
      }
    });
  } catch (err) {
    dispatch({
      type: VERIFY_LOGIN_FAILED,
      payload: {
        passed: false,
      }
    });
  }
};