import { SET_USER_NAME,
        SET_USER_ID,
        SET_FIRST_TIME,
        SET_EMAIL,
        PUSH_NOTIFICATIONS  } from "../actions/types";

const userData = {
    Name: "",
    userId: 0,
    firstTime: null  
}

const userNameReducer = (state = userData, action) => {
    switch (action.type){
        case SET_USER_NAME:
            return{
                ...state,
                Name: action.payload
            };
        case SET_USER_ID:
            return{
                ...state,
                userId: action.payload
            };
        case SET_FIRST_TIME:
            return{
                ...state,
                firstTime: action.payload
            };
        case SET_EMAIL:
                return{
                    ...state,
                    email: action.payload
                };
        case PUSH_NOTIFICATIONS:
                return{
                    ...state,
                    token:action.payload
                };
        default:
            return state;
    }

}

export default userNameReducer;