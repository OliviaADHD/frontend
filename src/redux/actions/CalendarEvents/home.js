import { ADD_EVENT,
    CHANGE_EVENT, DELETE_EVENT } from "../types";
import axios from "axios";
import {link} from '../../config/config'

const headers = {
    'Content-Type': 'application/json',
}

const userLink = link + "user/";

// no backend sending is implemented rn!

export const deleteEvent = (eventId) => async dispatch => {
    dispatch({
        type: DELETE_EVENT,
        payload: {eventId: eventId}
      });
}


