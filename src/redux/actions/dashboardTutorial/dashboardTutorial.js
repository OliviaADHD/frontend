import { DASHBOARD_TUT,
        DASHBOARD_TUT_FAILED,
        DASHBOARD_TUT_SUCCESS}  from "../types"; 

import axios from "axios";
import {link} from '../../config/config';

export const initializeDashboardTutorial = (userId) => async dispatch =>{
    axios.get(link+"/DashboardTutorial/checkTutorialDone/"+userId, {timeout: 200})
    .catch(err => {
        console.log('some error when looking whether that user exists', err);
            })
    .then(resp => resp.data)
    .then(data => {
        console.log('checked the initalizeDashboardTutorial', data);
        dispatch({
            type: DASHBOARD_TUT,
            payload: data.Exists});
    })
};

export const setDashboardTutorialFinished = (userId) => async dispatch => {
    axios.put(link + "/DashboardTutorial/setTutorialDone/"+userId, {timeout: 200})
    .catch(err => {console.log('Error in setDashboardtutorialFinished', err);
                    dispatch({
                        type: DASHBOARD_TUT_FAILED,
                        payload: {}})})
    .then (res => dispatch({
        type: DASHBOARD_TUT_SUCCESS,
        payload:{}}))
    .then(res => console.log('finished'));
}
