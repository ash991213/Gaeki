import { combineReducers } from 'redux';
import setting from './setting';
import ranking from './ranking';
import market from './market';

const rootReducer = combineReducers({ ranking, setting, market });

export default rootReducer;
