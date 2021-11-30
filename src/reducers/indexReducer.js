import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import validateEmailReducer from './validateEmailReducer';
import validateLoginReducer from './validateLoginReducer';
import menstruationReducer from './menstruationReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
    loginInfo: loginReducer,
    signUpInfo: signUpReducer,
    validateEmailInfo: validateEmailReducer,
    validateLoginInfo: validateLoginReducer,
    menstruationInfo: menstruationReducer,
    questionsReducer: questionReducer

});

export default rootReducer;