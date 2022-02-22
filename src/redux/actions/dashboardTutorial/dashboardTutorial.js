import { SET_TUTORIAL}  from "../types"; 

import axios from "axios";
import {link} from '../../config/config';

export const setDashboardTutorialFinished = (userId) => async dispatch => {
    axios.put(link + "/tutorial/"+userId, {timeout: 200})
    .catch(err => {console.log('Error in setDashboardtutorialFinished', err);})
    .then (res => dispatch({
        type: SET_TUTORIAL,
        payload:true}))
}
