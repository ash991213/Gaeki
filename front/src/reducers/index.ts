import { combineReducers } from 'redux';
import counter from './counter';
import ranking from './ranking';

const rootReducer = combineReducers({ counter, ranking });

export default rootReducer;
