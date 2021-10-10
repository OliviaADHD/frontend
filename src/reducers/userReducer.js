import { SIGN_IN, SIGN_UP,VERIFY_LOGIN, VERIFY_EMAIL } from '../actions/types';


const initialState = {
    userList: []
}


const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGN_UP:
            return{
                ...state,
                userList:state.userList.concat({
                    key: Math.random(),
                    name: action.data
                  })
            };
        case SIGN_IN:
            return{
                ...state,
                userList:state.userList.concat({
                    key: Math.random(),
                    name: action.data
                })
            };
        case VERIFY_LOGIN:
            return{
                ...state,
                userList:state.userList.concat({
                    key: Math.random(),
                    name: action.data
                })
            };
        case VERIFY_EMAIL:
            return{
                ...state,
                userList:state.userList.concat({
                    key: Math.random(),
                    name: action.data
                })
            };
    }

}


export default userReducer;