import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/indexReducer';

const configureStore = (initialState) => {
  const middleware = applyMiddleware(thunk);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;