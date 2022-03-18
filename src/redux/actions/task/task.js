import {
    ALL_TASKS,
    ADD_TASK,
    UPDATE_TASK,
    GET_TASK,
    DELETE_TASK,
    MARK_TASK_DONE, 
    TOGGLE_TASK_DONE, 
    MARK_ALL_TASKS_UNDONE
} from "../types";

import axios from "axios";
import {link} from '../../config/config';


const headers = {
    'Content-Type': 'application/json'
}

const taskLink = link + "tasks";

export const getAllTasks = () => async dispatch => {
    const res = await axios.get(taskLink + "all/1", {
        'Content-Type': 'application/json',
    }).then(res => {
        var answer = JSON.parse(res);
        dispatch({
            type: ALL_TASKS,
            payload: answer
        });
    }).catch(err => {
        dispatch({
            type: ALL_TASKS,
            payload: null
        });
    });

};


export const addTask = (todo) => async dispatch => {
    return axios.post(taskLink, todo,{
        headers: headers
      })
      .then(res => {
          dispatch({
            type: ADD_TASK,
            payload: res.status
          });
          return {success: true};
      })
      .catch(err => {
        console.warn(err);
        dispatch({
            type: ADD_TASK,
            payload: err.response.status
        });
      return {success: false};
    });
};


export const editTask = () => async dispatch => {
    dispatch({
        type: PREFERENCES,
        payload: {
            passed: false
        }
    });
};


export const deleteTask = () => async dispatch => {
    dispatch({
        type: PREFERENCES,
        payload: {
            passed: false
        }
    });
};


