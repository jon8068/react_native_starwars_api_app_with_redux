import { combineReducers } from 'redux';
import UserReducer from '../reducers/UserReducer';

const rootReducer = combineReducers({
  objects: UserReducer,
});

export default rootReducer;
