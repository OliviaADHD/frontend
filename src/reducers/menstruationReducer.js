import {
    SET_MENS_REGULAR,
    SET_START_LAST_PERIOD, 
    SET_PERIOD_CYCLE_LENGTH,
    SET_PERIOD_LENGTH
} from "../actions/types";


const menstruationData = {
    regular: undefined,
    startLastPeriod: undefined,
    periodCycleLength: undefined,
    periodLength: undefined    
}

const menstruationReducer = (state = menstruationData, action) => {
    switch (action.type){
        case SET_MENS_REGULAR:
            return{
                ...state,
                regular: action.payload.regular
            };
        case SET_START_LAST_PERIOD:
            return{
                ...state,
                startLastPeriod: action.payload.startLastPeriod
            };
        case SET_PERIOD_CYCLE_LENGTH:
            return{
                ...state,
                periodCycleLength: action.payload.periodCycleLength
            };
        case SET_PERIOD_LENGTH:
            return{
                ...state,
                periodLength: action.payload.periodLength
            };
        default:
            return state;
    }

}

export default menstruationReducer;