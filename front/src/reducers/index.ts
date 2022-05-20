import { combineReducers } from 'redux';
import counter from './counter';
import setting from './setting';

const rootReducer = combineReducers({ counter,setting });

export default rootReducer;
