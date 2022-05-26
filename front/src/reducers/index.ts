import { combineReducers } from 'redux';
import setting from './setting';
import ranking from './ranking';
import market from './market';
import user from './game';

const rootReducer = combineReducers({ ranking, setting, market, user });

export default rootReducer;
