import { DASHBOARD_TUT,
        DASHBOARD_TUT_FAILED,
        DASHBOARD_TUT_SUCCESS}  from "../types"; 

import axios from "axios";
import {link} from '../../config/config';

export const setDashboardTutorialFinished = (userId) => async dispatch => {
    axios.put(link + "/tutorial/"+userId, {timeout: 200})
    .catch(err => {console.log('Error in setDashboardtutorialFinished', err);
                    dispatch({
                        type: DASHBOARD_TUT_FAILED,
                        payload: {}})})
    .then (res => dispatch({
        type: DASHBOARD_TUT_SUCCESS,
        payload:{}}))
}
