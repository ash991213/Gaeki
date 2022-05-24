import { combineReducers } from 'redux';
import counter from './counter';
import setting from './setting';
import ranking from './ranking';
import login from './login';

const rootReducer = combineReducers({ counter, ranking ,setting, login});

export default rootReducer;
