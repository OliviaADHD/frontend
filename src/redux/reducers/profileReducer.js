import { SET_LANGUAGE,
    SET_DARKMODE,
    SET_HIDEPHOTO,
    SET_NOTIFICATION  } from "../actions/types";

const profileData = {
    language: "",
    darkMode: null,
    hidePhoto: null,
    stopNotification:null
}

const profileReducer = (state = profileData, action) => {
switch (action.type){
    case SET_LANGUAGE:
        return{
            ...state,
            language: action.payload
        };
    case SET_DARKMODE:
        return{
            ...state,
            darkMode: action.payload
        };
    case SET_HIDEPHOTO:
        return{
            ...state,
            hidePhoto: action.payload
        };
    case SET_NOTIFICATION:
            return{
                ...state,
                stopNotification: action.payload
            };
    default:
        return state;
}

}

export default profileReducer;