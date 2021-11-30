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
    SET_NETWORK_ERROR_FALSE,
    SET_USER_ID,
    SET_FIRST_TIME,
    SET_NETWORK_ERROR_TRUE,
    SET_USER_NAME
  } from "../types";
import axios from "axios";
import {link} from '../../config/config'

const headers = {
  'Content-Type': 'application/json',
}

export const beforeSignUP = () => async dispatch => {
  console.log('dispatching before SignUp');
  dispatch({
    type: SIGN_UP,
    payload: {}
  });
};

export const beforeSignIn = () => async dispatch => {
  console.log('dispatching SIGN_IN');
  dispatch({
    type: SIGN_IN,
    payload: {}
  });
};

export const beforeValidEmail = () => async dispatch => {
  console.log('dispatching before VLID Email');
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
  axios.post(link+"signup", user, {timeout: 2})
  .then(resp => {
    dispatch({type: SIGN_UP_SUCCESS,
              payload: {passed: true}});
    dispatch({type: SET_USER_ID, payload: resp.data.userId});
    dispatch({type:SET_USER_NAME, payload: resp.data.name});
    dispatch({type: SET_FIRST_TIME, payload: true})
  })
  .catch(err =>{
    if (!err.status) {
      //it's a network error!
      dispatch({
        type: SET_NETWORK_ERROR_TRUE,
        payload: {}});
    } else {
      dispatch({
        type: SIGN_UP_FAILED,
        payload: {
          passed:false,
          error: "Sign up failed"}});
    }
  });
};
  
export const signIn = (loginData) => async dispatch => {
  axios.post(link + "login", loginData,{
    headers: headers
  }, {timout: 2})
  .then(res => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {passed:true}
      });
      dispatch({type: SET_USER_NAME, payload: res.data.name});
      dispatch({type: SET_USER_ID, payload: res.data.userId});
      dispatch({type: SET_FIRST_TIME, payload: res.data.firstTime});
  })
  .catch(err => {
    if (!err.status) {
    //it's a network error!
    dispatch({
      type: SET_NETWORK_ERROR_TRUE,
      payload: {}})
  } else {
    dispatch({
      type: SIGN_IN_FAILED,
      payload: {
        passed:false,
        error: "Login failed",
      }
     });
  }});
};

export const verifyEmail = (email) => async dispatch => {
  axios.post(link+"validation/email/"+email, {timout: 2})
  .then(resp => {
    dispatch({
      type: SET_NETWORK_ERROR_FALSE,
      payload: {}});
    dispatch({
      type: VERIFY_EMAIL_SUCCESS,
      payload: {
        passed:true
      }});
  })
  .catch (err => {
    if (!err.status) {
      //it's a network error!
      dispatch({
        type: SET_NETWORK_ERROR_TRUE,
        payload: {}})
    } else {
      dispatch({
        type: VERIFY_EMAIL_FAILED,
        payload: {
          passed: false,
          text: "Email exists"
        }});
      dispatch({
        type: SET_NETWORK_ERROR_FALSE,
        payload: {}});
    }
  });
};

export const verifyLogin = (login) => async dispatch => {
  axios.post(link+"validation/login/"+login, {timeout: 2})
  .then(resp => {
    dispatch({
      type: SET_NETWORK_ERROR_FALSE,
      payload: {}});
    dispatch({
      type: VERIFY_LOGIN_SUCCESS,
      payload: {
        passed:true
      }
    });
  })
  .catch (err => {
    if (!err.status) {
      //it's a network error!
      dispatch({
        type: SET_NETWORK_ERROR_TRUE,
        payload: {}})
    } else {
      dispatch({
        type: VERIFY_LOGIN_FAILED,
        payload: {
          passed: false,
        }
      });
      dispatch({
        type: SET_NETWORK_ERROR_FALSE,
        payload: {}});
    }
  })
};
