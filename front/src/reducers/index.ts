import { combineReducers } from 'redux';
import setting from './setting';
import ranking from './ranking';

const rootReducer = combineReducers({ ranking, setting });

export default rootReducer;
