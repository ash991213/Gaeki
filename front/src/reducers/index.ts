import { combineReducers } from 'redux';
import ranking from './ranking';
import market from './market';
import user from './game';

const rootReducer = combineReducers({ ranking, market, user });

export default rootReducer;
