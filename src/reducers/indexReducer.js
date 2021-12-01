import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import validateEmailReducer from './validateEmailReducer';
import validateLoginReducer from './validateLoginReducer';
import questionReducer from './questionReducer';
import networkAvailabilityReducer from './networkAvailabilityReducer';
import userNameReducer from './userNameReducer';

const rootReducer = combineReducers({
    loginInfo: loginReducer,
    signUpInfo: signUpReducer,
    validateEmailInfo: validateEmailReducer,
    validateLoginInfo: validateLoginReducer,
    questionsReducer: questionReducer,
    networkAvailability: networkAvailabilityReducer,
    userName: userNameReducer
});

export default rootReducer;