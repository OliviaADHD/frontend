import { 
    NEW_QUESTIONS, 
    NEW_QUESTIONS_SUCCESS,
    NEW_QUESTIONS_FAILED,
} from "../actions/types";

const questionState = {
    message: {}    
}

const questionReducer = (state = questionState, action) => {
    switch (action.type){
        case NEW_QUESTIONS:
            return{
                ...state,
                message:action.payload
            };
        case NEW_QUESTIONS_SUCCESS:
            return{
                ...state,
                message:action.payload
            };
        case NEW_QUESTIONS_FAILED:
            return{
                ...state,
                message:action.payload
            };
        default:
            return state;
    }

}

export default questionReducer;