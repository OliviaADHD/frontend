import {
    VERIFY_EMAIL,
    VERIFY_EMAIL_SUCCESS,
    VERIFY_EMAIL_FAILED,
} from "../actions/types";

const emailValidityState = {
    message: {}    
}

const validateEmailReducer = (state = emailValidityState, action) => {
    switch (action.type){
        case VERIFY_EMAIL_SUCCESS:
            return{
                ...state,
                message:action.payload
            };
        case VERIFY_EMAIL_FAILED:
            return{
                ...state,
                message:action.payload
            };
        default:
            return state;
    }

}

export default validateEmailReducer;