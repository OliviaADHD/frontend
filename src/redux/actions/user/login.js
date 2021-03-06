import { 
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    SET_NETWORK_ERROR_FALSE,
    SET_USER_ID,
    SET_FIRST_TIME,
    SET_EMAIL,
    SET_NETWORK_ERROR_TRUE,
    SET_USER_NAME,
    SET_HIDEPHOTO,
    SET_DARKMODE,
    SET_LANGUAGE,
    SET_NOTIFICATION,
    SET_TUTORIAL
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
      dispatch({type: SET_USER_NAME, payload: res.data.name});
      dispatch({type: SET_USER_ID, payload: res.data.userId});
      dispatch({type: SET_FIRST_TIME, payload: res.data.firstTime});
      dispatch({type: SET_EMAIL, payload: res.data.firstTime});
      dispatch({type: SET_HIDEPHOTO, payload: res.data.hidePhoto});
      dispatch({type:SET_NOTIFICATION, payload: res.data.stopNotification});
      dispatch({type: SET_DARKMODE, payload: res.data.darkMode});
      dispatch({type: SET_LANGUAGE, payload: res.data.language});
      dispatch({type: SET_TUTORIAL, payload: res.data.tutorialCompleted});
      dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {passed:true, error: false}
        });
      dispatch({
          type: SET_NETWORK_ERROR_FALSE,
          payload: {}});
        return {success: true, firstTime: res.data.firstTime, tutorialCompleted: res.data.tutorialCompleted};
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

  export const signInFacebook = (token) => async dispatch => {
    return axios.post(userLink +"login-facebook/"+token, {timeout: 400})
    .then(res => {
        dispatch({type: SET_USER_NAME, payload: res.data.name});
        dispatch({type: SET_USER_ID, payload: res.data.userId});
        dispatch({type: SET_FIRST_TIME, payload: res.data.firstTime});
        dispatch({type: SET_EMAIL, payload: res.data.firstTime});
        dispatch({type: SET_HIDEPHOTO, payload: res.data.hidePhoto});
        dispatch({type:SET_NOTIFICATION, payload: res.data.stopNotification});
        dispatch({type: SET_DARKMODE, payload: res.data.darkMode});
        dispatch({type: SET_LANGUAGE, payload: res.data.language});
        dispatch({type: SET_TUTORIAL, payload: res.data.tutorialCompleted});

        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {passed:true, error: false}
        });
        dispatch({
          type: SET_NETWORK_ERROR_FALSE,
          payload: {}});
        return {success: true, firstTime: res.data.firstTime, tutorialCompleted: res.data.tutorialCompleted};
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

        dispatch({type: SET_USER_NAME, payload: res.data.name});
        dispatch({type: SET_USER_ID, payload: res.data.userId});
        dispatch({type: SET_FIRST_TIME, payload: res.data.firstTime});
        dispatch({type: SET_EMAIL, payload: loginData.email});
        

        dispatch({type: SET_HIDEPHOTO, payload: res.data.hidePhoto});
        dispatch({type:SET_NOTIFICATION, payload: res.data.stopNotification});
        dispatch({type: SET_DARKMODE, payload: res.data.darkMode});
        dispatch({type: SET_LANGUAGE, payload: res.data.language});
        dispatch({type: SET_TUTORIAL, payload: res.data.tutorialCompleted});
        dispatch({
          type: SET_NETWORK_ERROR_FALSE,
          payload: {}});
        return {success: true, firstTime: res.data.firstTime, tutorialCompleted: res.data.tutorialCompleted};
    })
    .catch(err => {
      console.warn(err);
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



  