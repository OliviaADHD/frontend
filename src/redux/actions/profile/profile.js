import {PREFERENCES, PREFERENCES_SUCCESS, PREFERENCES_FAILED, SET_DARKMODE, SET_LANGUAGE,
    PRIVACY, PRIVACY_SUCCESS, PRIVACY_FAILED, SET_HIDEPHOTO, SET_NOTIFICATION
} from "../types";
import axios from "axios";
import {link} from '../../config/config';

const headers = {
    'Content-Type': 'application/json'
}

const profileLink = link + "profile/";

export const beforePreferences = () => async dispatch => {
    dispatch({
        type: PREFERENCES,
        payload: {
            passed: false
        }
    });
};

export const beforePrivacy = () => async dispatch => {
    dispatch({
        type: PRIVACY,
        payload: {
            passed: false
        }
    });
};

export const updatePreferences = (preferences) => async dispatch => {
    return axios.post(profileLink + "preferences", preferences, {
        headers: headers
    }, {timeout: 2}).then(res => {
        dispatch({type: SET_DARKMODE, payload: preferences.darkMode});

        dispatch({type: SET_LANGUAGE, payload: preferences.language});

        dispatch({
            type: PREFERENCES_SUCCESS,
            payload: {
                passed: true
            }
        });
        return true;
    }).catch(err => {
        dispatch({
            type: PREFERENCES_FAILED,
            payload: {
                passed: false
            }
        });
        return false;
    })
};

export const updatePrivacy = (privacy) => async dispatch => {
    return axios.post(profileLink + "privacy", privacy, {
        headers: headers
    }, {timeout: 2}).then(res => {
        dispatch({type: SET_HIDEPHOTO, payload: privacy.hidePhoto});

        dispatch({type: SET_NOTIFICATION, payload: privacy.notification});

        dispatch({
            type: PRIVACY_SUCCESS,
            payload: {
                passed: true
            }
        });
        return true;
    }).catch(err => {
        dispatch({
            type: PRIVACY_FAILED,
            payload: {
                passed: false
            }
        });
        return false;
    })
};
