import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import validateEmailReducer from './validateEmailReducer';
import validateLoginReducer from './validateLoginReducer';

const rootReducer = combineReducers({
    loginInfo: loginReducer,
    signUpInfo: signUpReducer,
    validateEmailInfo: validateEmailReducer,
    validateLoginInfo: validateLoginReducer
});

export default rootReducer;