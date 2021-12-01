import {
    SET_MENS_REGULAR,
    SET_START_LAST_PERIOD, 
    SET_PERIOD_CYCLE_LENGTH,
    SET_PERIOD_LENGTH,
    SET_FIRST_TIME
} from "../actions/types";


const menstruationData = {
    firstTime: undefined,
    regular: undefined,
    startLastPeriod: [],
    periodCycleLength: [],
    periodLength: []  
}

const menstruationReducer = (state = menstruationData, action) => {
    switch (action.type){
        case SET_FIRST_TIME:
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