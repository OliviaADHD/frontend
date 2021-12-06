import {
    VERIFY_LOGIN,
    VERIFY_LOGIN_FAILED, 
    VERIFY_LOGIN_SUCCESS
} from "../actions/types";


const loginValidityState = {
    message: {}    
}

const validateLoginReducer = (state = loginValidityState, action) => {
    switch (action.type){
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

export default validateLoginReducer;