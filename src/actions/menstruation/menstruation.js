import {
    SET_MENS_REGULAR,
    SET_START_LAST_PERIOD, 
    SET_PERIOD_CYCLE_LENGTH,
    SET_PERIOD_LENGTH,
    SET_FIRST_TIME
} from "../actions/types";

import axios from "axios";
import {link} from '../../config/config'

//Menstruation regular not done yet, as I have to change the backend for this!

export const initializeMenstruationAfterLogin = (userId) => async dispatch =>{
    axios.get(link+"/menstruation"+"/checkUserMenstruationDataExists", userId)
    .then(resp => axios.get(link+"/menstruation"+"/getUserData", userId))
    .then(res => res.json())
    .then(data =>{
        dispatch({type: SET_MENS_REGULAR, payload: data.regular});
        dispatch({type: SET_START_LAST_PERIOD, payload: data.LastPeriodStarts});
        dispatch({type: SET_PERIOD_CYCLE_LENGTH, payload: data.periodCycleLengths});
        dispatch({type: SET_PERIOD_LENGTH, payload: data.PeriodLengths});
        dispatch({type: SET_FIRST_TIME, payload: data.firstTime})
    })
    .catch(err => {
        if (!err.response.status) {
            //it's a network error!
            dispatch({
            type: SET_NETWORK_ERROR_TRUE,
            payload: {}});
            dispatch({type: SET_FIRST_TIME, payload: "Error"});
        } else {
            //Data does not exist yet! It's the first time
            dispatch({type: SET_FIRST_TIME, payload: true});
        }
    });

};

export const newStartPeriod = (login, startPeriod) => async dispatch => {
    try {
      const res = await axios.post(link+"updateStartPeriod", login, startPeriod);
      console.log(res);
      dispatch({
        type: SET_START_LAST_PERIOD,
        payload: {
          startLastPeriod: startPeriod
        }
      });
    } catch (err) {
      console.warn("error: " + err);
    }
  };

export const newMensRegular = (login, regular) => async dispatch => {
    try {
        const res = await axios.post(link+"updateRegular", login, regular);
        console.log(res);
        dispatch({
        type: SET_MENS_REGULAR,
        payload: {
            regular: regular
        }
        });
    } catch (err) {
        console.warn("error: " + err);
    }
    };

export const newPeriodCycleLength = (login, periodCycleLength) => async dispatch => {
    try {
        const res = await axios.post(link+"updateCycleLength", login, periodCycleLength);
        console.log(res);
        dispatch({
        type: SET_PERIOD_CYCLE_LENGTH,
        payload: {
            periodCycleLength: periodCycleLength
        }
        });
    } catch (err) {
        console.warn("error: " + err);
    }
    };

export const newPeriodLength = (login, periodLength) => async dispatch => {
    try {
        const res = await axios.post(link+"updatePeriodLength", login, periodLength);
        console.log(res);
        dispatch({
        type: SET_PERIOD_CYCLE_LENGTH,
        payload: {
            periodLength: periodLength
        }
        });
    } catch (err) {
        console.warn("error: " + err);
    }
    };