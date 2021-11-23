import {
    SET_MENS_REGULAR,
    SET_START_LAST_PERIOD, 
    SET_PERIOD_CYCLE_LENGTH,
    SET_PERIOD_LENGTH
} from "../actions/types";

import axios from "axios";
import {link} from '../../config/config'

//Menstruation regular not done yet, as I have to change the backend for this!

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