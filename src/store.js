import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const configureStore = () => createStore(rootReducer, applyMiddleware(logger, thunk));

export default configureStore;
