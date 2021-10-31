import { SIGN_UP, 
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
    VERIFY_EMAIL,
    VERIFY_EMAIL_SUCCESS,
    VERIFY_EMAIL_FAILED,
    VERIFY_LOGIN_FAILED, 
    VERIFY_LOGIN, 
    VERIFY_LOGIN_SUCCESS
} from "../actions/types";

const initialState = {
    message: {},
    
}


const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGN_UP_FAILED:
            return{
                ...state,
                message:action.payload
            };
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                message:action.payload
            };
        case SIGN_IN_SUCCESS:
            return{
                ...state,
                message:action.payload
            };
        case SIGN_IN_FAILED:
            return{
                ...state,
                message:action.payload
            };
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
        case VERIFY_LOGIN_FAILED:
            return{
                ...state,
                message:action.payload
            };
        case VERIFY_LOGIN_SUCCESS:
            return{
                ...state,
                message:action.payload
            };
        default:
            return state;
    }

}


export default userReducer;