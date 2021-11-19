import { 
    TEST_LOGIN, 
    SET_USER_ID,
    SET_USER_NAME
 } from "../types";


export const testLogin = () => dispatch => {
    dispatch({
      type: TEST_LOGIN,
      payload: {
        userId: 'testUserId',
        userName: 'testName'
      }
    })
};

export const setName = (name) => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: {
            userName:name
        }
    })
}

export const setUserId = (id) => dispatch => {
    dispatch({
        type: SET_USER_ID,
        payload: {
            userId:id
        }
    })
}


