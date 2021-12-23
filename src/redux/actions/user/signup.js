import { SIGN_UP, 
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
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
    SET_HIDEPHOTO,
    SET_NOTIFICATION,
    SET_LANGUAGE,
    SET_DARKMODE,
  } from "../types";
import axios from "axios";
import {link} from '../../config/config'

const headers = {
  'Content-Type': 'application/json',
}

const userLink = link + "user/";

//cancel token to handle network errors better -> see https://github.com/axios/axios/issues/1739


export const beforeSignUP = () => async dispatch => {
  dispatch({
    type: SIGN_UP,
    payload: {passed: false}
  });
};



export const beforeValidEmail = () => async dispatch => {
  dispatch({
    type: VERIFY_EMAIL,
    payload: {passed: false}
  });
};

export const beforeValidLogin = () => async dispatch => {
  dispatch({
    type: VERIFY_LOGIN,
    payload: {passed: false}
  });
};

export const newUserGoogle = (token) => async dispatch => {
  return axios.post(userLink+"signup-google/"+token, {timeout: 400})
  .then(resp => {
      dispatch({type: SIGN_UP_SUCCESS,
                payload: {passed: true}});
      dispatch({type: SET_USER_ID, payload: resp.data.userId});
      dispatch({type:SET_USER_NAME, payload: resp.data.name});
      dispatch({type: SET_FIRST_TIME, payload: true});
      dispatch({type: SET_HIDEPHOTO, payload: false});
      dispatch({type:SET_NOTIFICATION, payload: true});
      dispatch({type: SET_DARKMODE, payload: false});
      dispatch({type: SET_LANGUAGE, payload: "English"});
      return true;
    })
  .catch(err => {
    if (err.response === undefined) {
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
      dispatch({
            type: SET_NETWORK_ERROR_FALSE,
            payload: {}});
    };
    return false;
  });
}


export const newUser = (user) => async dispatch => {
  return axios.post(userLink+"signup", user, {timeout: 2})
  .then(resp => {
    dispatch({type: SIGN_UP_SUCCESS,
              payload: {passed: true}});
  dispatch({type: SET_USER_ID, payload: resp.data.userId});
  dispatch({type:SET_USER_NAME, payload: resp.data.name});
  dispatch({type: SET_FIRST_TIME, payload: true});
    dispatch({type: SET_HIDEPHOTO, payload: false});
    dispatch({type:SET_NOTIFICATION, payload: true});
    dispatch({type: SET_DARKMODE, payload: false});
    dispatch({type: SET_LANGUAGE, payload: "English"});
    return true;
  })
  .catch(err =>{
    console.warn("Caught netwr")
    console.warn(err);
    if (err.response === undefined) {
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
      dispatch({
            type: SET_NETWORK_ERROR_FALSE,
            payload: {}});
    };
    return false;
  });
};


export const verifyEmail = (email) => async dispatch => {
  return axios.post(userLink+"email/"+email, {timeout: 2})
  .then(resp => {
    dispatch({
      type: SET_NETWORK_ERROR_FALSE,
      payload: {}});
    dispatch({
      type: VERIFY_EMAIL_SUCCESS,
      payload: {
        passed:true
      }});
    return true;
  })
  .catch (err => {
    if (err.response === undefined) {
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
    return false;
  });
};

export const verifyLogin = (login) => async dispatch => {
  return axios.post(userLink+"login/"+login, {timeout: 2})
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
    return true;
  })
  .catch (err => {
    if (err.response === undefined) {
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
    };
    return false;
  })
};


const setUserData = (resp) => async dispatch =>{

}


const setProfileData = () => async dispatch =>{

}



