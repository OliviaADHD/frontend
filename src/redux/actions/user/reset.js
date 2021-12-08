import { 
    PASSWORD_RESET,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_SUCCESS
  } from "../types";

import axios from "axios";
import {link} from '../../config/config'

const userLink = link + "user/";

const headers = {
    'Content-Type': 'application/json',
  }
  
export const resetPass = (email) => async dispatch => {
    dispatch({
        type: PASSWORD_RESET,
        payload: {}
    });
    axios.post(userLink+"reset-password", {email:email}, {
        headers: headers
      } ,{timout: 2})
    .then(resp => {
      dispatch({
        type: PASSWORD_RESET_SUCCESS,
        payload: {
          passed:true
        }});
    })
    .catch (err => {
        dispatch({
            type: PASSWORD_RESET_FAILED,
            payload: {
                passed:false
            }
        })
    });
  };