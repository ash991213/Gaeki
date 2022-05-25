import { combineReducers } from 'redux';
import setting from './setting';
import ranking from './ranking';
import market from './market';
import login from './login';
import info from './info';

const rootReducer = combineReducers({ ranking, setting, market, login, info });

export default rootReducer;
