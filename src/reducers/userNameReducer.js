import { SET_USER_NAME,
        SET_USER_ID,
        SET_FIRST_TIME  } from "../actions/types";

const userData = {
    Name: "testName",
    ID: "testLogin",
    firstTime: true  
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
                ID: action.payload
            };
        case SET_FIRST_TIME:
            return{
                ...state,
                firstTime: action.payload
            };
        default:
            return state;
    }

}

export default userNameReducer;