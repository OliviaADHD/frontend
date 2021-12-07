import {
    SIGN_UP,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    VERIFY_EMAIL_SUCCESS,
    VERIFY_EMAIL_FAILED,
    VERIFY_LOGIN_FAILED, 
    VERIFY_LOGIN_SUCCESS
} from "../actions/types";

const signUpState = {
    message: {passed: false}    
}

const signUpReducer = (state = signUpState, action) => {
    switch (action.type){
        case SIGN_UP:
            return{
                ...state,
                message:action.payload
            };
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                message:action.payload
            };
        case SIGN_UP_FAILED:
            return{
                ...state,
                message:action.payload
            };
        default:
            return state;
    }

}

export default signUpReducer;