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
    DASHBOARD_TUT
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

export const beforeSignIn = () => async dispatch => {
  dispatch({
    type: SIGN_IN,
    payload: {passed: false, error: false}
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
    return true;
  })
  .catch(err =>{
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

export const signInGoogle = (token) => async dispatch => {
  return axios.post(userLink + "login-google/"+token, {timeout: 300})
  .then(res => {
      dispatch({type: SET_USER_NAME, payload: res.data.name});
      dispatch({type: SET_USER_ID, payload: res.data.userId});
      dispatch({type: SET_FIRST_TIME, payload: res.data.firstTime});
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {passed:true, error: false}
      });
      dispatch({type: DASHBOARD_TUT, payload: res.data.tutDone});
      dispatch({
        type: SET_NETWORK_ERROR_FALSE,
        payload: {}});
      return {success: true, firstTime: res.data.firstTime, tutDone: res.data.tutDone};
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
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {passed:true, error: false}
      });
      dispatch({type: DASHBOARD_TUT, payload: res.data.tutDone});
      dispatch({
        type: SET_NETWORK_ERROR_FALSE,
        payload: {}});
      return {success: true, firstTime: res.data.firstTime, tutDone: res.data.tutDone};
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

export const newUserFacebook = (token) => async dispatch => {
  return axios.post(userLink+"signup-facebook/"+token, {timeout: 400})
  .then(resp => {
      dispatch({type: SIGN_UP_SUCCESS,
                payload: {passed: true}});
      dispatch({type: SET_USER_ID, payload: resp.data.userId});
      dispatch({type:SET_USER_NAME, payload: resp.data.name});
      dispatch({type: SET_FIRST_TIME, payload: true});
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
      dispatch({type: DASHBOARD_TUT, payload: res.data.tutDone});
      dispatch({
        type: SET_NETWORK_ERROR_FALSE,
        payload: {}});
      return {success: true, firstTime: res.data.firstTime, tutDone: res.data.tutDone};
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



