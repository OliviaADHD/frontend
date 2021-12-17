
import {PREFERENCES, 
    PREFERENCES_SUCCESS, 
    PREFERENCES_FAILED,
    SET_DARKMODE,
    SET_LANGUAGE,
} from "../types";
import axios from "axios";
import {link} from '../../config/config';


const headers = {
    'Content-Type': 'application/json',
}


const profileLink = link + "profile/";


export const beforePreferences = () => async dispatch => {
    dispatch({
      type: PREFERENCES,
      payload: {passed: false}
    });
  };

  export const updatePreferences = (preferences) =>async dispatch => {
    console.warn(preferences)
    return axios.post(profileLink + "preferences", preferences,{
      headers: headers
    }, {timeout: 2})
    .then(res => {
        dispatch({type: SET_DARKMODE, 
            payload: preferences.darkMode
        });

        dispatch({type: SET_LANGUAGE, 
            payload: preferences.language,
        });


        dispatch({type: PREFERENCES_SUCCESS, 
            payload: {
                passed: true,
        }});
    })
    .catch(err => {
        dispatch({type: PREFERENCES_FAILED, 
            payload: {
                passed: false,
        }});
    })
};
