import {
    ALL_TASKS,
    ADD_TASK,
    CHANGE_STATUS,
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
    return axios.get(taskLink + "/all/1", {
        'Content-Type': 'application/json',
    }).then(res => {
        var answer = []
        res.data.forEach(function (item, index) {
            answer.push(item)
        });   
        dispatch({
            type: ALL_TASKS,
            payload: answer
        });
        return {success: true};
    }).catch(err => {
        dispatch({
            type: ALL_TASKS,
            payload: null
        });
        return {success: false};
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



export const changeStatus = (todoId,val) => async dispatch => {
    var json = JSON.stringify({completed:val});
    console.log(json)
    return axios.get(taskLink +"/"+todoId, json,{
        headers: headers
      })
      .then(res => {
          dispatch({
            type: CHANGE_STATUS,
            payload: res.status
          });
          return {success: true};
      })
      .catch(err => {
        dispatch({
            type: CHANGE_STATUS,
            payload: err.response.status
        });
        console.log(err);
      return {success: false};
    });
};

