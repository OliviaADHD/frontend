import { SET_LANGUAGE,
    SET_DARKMODE,
    SET_HIDEPHOTO,
    SET_NOTIFICATION,
    SET_TUTORIAL
} from "../actions/types";

const profileData = {
    language: "",
    darkMode: null,
    hidePhoto: null,
    stopNotification:null,
    tutorialCompleted:null
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
    case SET_TUTORIAL:
        return{
            ...state,
            tutorialCompleted: action.payload
        };            
    default:
        return state;
}

}

export default profileReducer;