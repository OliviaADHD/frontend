import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILED,
} from "../actions/types";


const signInState = {
    message: 
    {passed: false,
    error: false}    
}



const signInReducer = (state = signInState, action) => {
    switch (action.type){
        case SIGN_IN:
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
        default:
            return state;
    }

}

export default signInReducer;