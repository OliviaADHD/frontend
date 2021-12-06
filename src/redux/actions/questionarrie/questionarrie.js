import { NEW_QUESTIONS, 
    NEW_QUESTIONS_SUCCESS,
    NEW_QUESTIONS_FAILED,
  } from "../types";
import axios from "axios";
import {link} from '../../config/config'

export const beforePOST = () => async dispatch => {
    dispatch({
      type: NEW_QUESTIONS,
      payload: {}
    });
  };
  
  export const newQuestions = (questions) => async dispatch => {
    try {
      console.log(JSON.stringify(questions));
      const res = await axios.post(link+"questions/", questions,{
        'Content-Type': 'application/json',
      });
      dispatch({
        type: NEW_QUESTIONS_SUCCESS,
        payload: {
          passed:true,
        }
      });
    } catch (err) {
      dispatch({
        type: NEW_QUESTIONS_FAILED,
        payload: {
          passed:false,
        }
      });
    }
  };