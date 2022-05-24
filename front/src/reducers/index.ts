import { combineReducers } from 'redux';
import counter from './counter';
import setting from './setting';
import ranking from './ranking';
import market from './market';
import login from './login';

const rootReducer = combineReducers({ counter, ranking ,setting, market ,login});

export default rootReducer;
