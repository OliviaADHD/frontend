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
    SET_USER_NAME,
  } from "../types";
import axios from "axios";
import {link} from '../../config/config'

const headers = {
  'Content-Type': 'application/json',
}

const userLink = link + "user/";

export const beforeSignIn = () => async dispatch => {
    dispatch({
      type: SIGN_IN,
      payload: {passed: false, error: false}
    });
  };


  export const signInGoogle = (token) => async dispatch => {
    return axios.post(userLink + "login-google/"+token, {timeout: 300})
    .then(res => {
        setUserData(res);
        setProfileData(res);
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {passed:true, error: false}
        });
        dispatch({
          type: SET_NETWORK_ERROR_FALSE,
          payload: {}});
        return {success: true, firstTime: res.data.firstTime};
    })
    .catch(err => {
      if (err.response === undefined) {
      //it's a network error!
      dispatch({
        type: SET_NETWORK_ERROR_TRUE,
        payload: {}});
    } else {
      dispatch({
        type: SIGN_IN_FAILED,
        payload: {
          passed:false,
          error: true,
          errorMessage: "Login failed",
        }
       });
       dispatch({
        type: SET_NETWORK_ERROR_FALSE,
        payload: {}});
    };
    return {success: false};
    });
  
  };


  export const signIn = (loginData) =>async dispatch => {
    return axios.post(userLink + "login", loginData,{
      headers: headers
    }, {timeout: 2})
    .then(res => {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {passed:true, error: false}
        });
        setUserData(res);
        setProfileData(res);
        dispatch({
          type: SET_NETWORK_ERROR_FALSE,
          payload: {}});
        return {success: true, firstTime: res.data.firstTime};
    })
    .catch(err => {
      if (err.response === undefined) {
      //it's a network error!
      dispatch({
        type: SET_NETWORK_ERROR_TRUE,
        payload: {}});
    } else {
      dispatch({
        type: SIGN_IN_FAILED,
        payload: {
          passed:false,
          error: true,
          errorMessage: "Login failed",
        }
       });
       dispatch({
        type: SET_NETWORK_ERROR_FALSE,
        payload: {}});
    };
    return {success: false};
  });
  };


const setUserData = (res) => async dispatch => {
  dispatch({type: SET_USER_NAME, payload: res.data.name});
  dispatch({type: SET_USER_ID, payload: res.data.userId});
  dispatch({type: SET_FIRST_TIME, payload: res.data.firstTime});
}
  
  
const setProfileData = (res) => async dispatch => {
  dispatch({type: SET_HIDEPHOTO, payload: res.data.hidePhoto});
  dispatch({type:SET_NOTIFICATION, payload: res.data.stopNotification});
  dispatch({type: SET_DARKMODE, payload: res.data.darkMode});
  dispatch({type: SET_LANGUAGE, payload: res.data.language});
  
}
  