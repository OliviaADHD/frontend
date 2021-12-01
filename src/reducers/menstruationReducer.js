import {
    SET_MENS_REGULAR,
    SET_START_LAST_PERIOD, 
    SET_PERIOD_CYCLE_LENGTH,
    SET_PERIOD_LENGTH,
    SET_FIRST_TIME_MENS,
    MENS_INIT_FALSE,
    MENS_INIT_TRUE
} from "../actions/types";


const menstruationData = {
    initialized: false,
    firstTime: true,
    regular: true,
    startLastPeriod: [],
    periodCycleLength: [],
    periodLength: []  
}

const menstruationReducer = (state = menstruationData, action) => {
    switch (action.type){
        case MENS_INIT_FALSE:
            return{
                ...state,
                initialized: false
            };
        case MENS_INIT_TRUE:
            return{
                ...state,
                initialized: true
            };
        case SET_FIRST_TIME_MENS:
            return{
                ...state,
                firstTime: action.payload
            };
        case SET_MENS_REGULAR:
            return{
                ...state,
                regular: action.payload
            };
        case SET_START_LAST_PERIOD:
            return{
                ...state,
                startLastPeriod: action.payload
            };
        case SET_PERIOD_CYCLE_LENGTH:
            return{
                ...state,
                periodCycleLength: action.payload
            };
        case SET_PERIOD_LENGTH:
            return{
                ...state,
                periodLength: action.payload
            };
        default:
            return state;
    }

}

export default menstruationReducer;