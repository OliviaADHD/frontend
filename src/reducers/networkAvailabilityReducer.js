import { SET_NETWORK_ERROR_TRUE, SET_NETWORK_ERROR_FALSE } from "../actions/types";


const networkError = {
    error: false
}

const networkAvailabilityReducer = (state = networkError, action) => {
    switch (action.type){
        case SET_NETWORK_ERROR_FALSE:
            return{
                ...state,
                error: false
            };
        case SET_NETWORK_ERROR_TRUE:
            return{
                ...state,
                error: true
            };
        default:
            return state;
    }

}

export default networkAvailabilityReducer;