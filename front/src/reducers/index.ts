import { combineReducers } from 'redux';
import setting from './setting';
import ranking from './ranking';
import market from './market';
import login from './login';
const rootReducer = combineReducers({ ranking ,setting, market ,login});

export default rootReducer;
