import axios from "axios";
import {link} from '../../config/config';


const headers = {
    'Content-Type': 'application/json'
}

const taskLink = link + "tasks";

export const getAllTasks = () => async dispatch => {
    dispatch({
        type: PREFERENCES,
        payload: {
            passed: false
        }
    });
};


export const addTask = () => async dispatch => {
    dispatch({
        type: PREFERENCES,
        payload: {
            passed: false
        }
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


