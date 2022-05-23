import { combineReducers } from 'redux';
import counter from './counter';
import setting from './setting';
import ranking from './ranking';

const rootReducer = combineReducers({ counter, ranking ,setting});

export default rootReducer;
