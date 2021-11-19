import {
    TEST_LOGIN,
    SET_USER_ID,
    SET_USER_NAME
} from "../actions/types";

const userData = {
    userId: 'userId',
    userName: 'userName'
}


const userNameReducer = (state = userData, action) => {
    switch (action.type){
        case TEST_LOGIN:
            return{
                ...state,
                userId:action.payload.userId,
                userName:action.payload.userName
            };
        case SET_USER_ID:
            return{
                ...state,
                userId:action.payload.userId,
            };
        case SET_USER_NAME:
            return{
                ...state,
                userName:action.payload.userName
            };
        default:
            return state;
    }

}

export default userNameReducer;