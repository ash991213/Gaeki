import { combineReducers } from 'redux';
import counter from './counter';
import setting from './setting';
import ranking from './ranking';
import market from './market';

const rootReducer = combineReducers({ counter, ranking ,setting, market});

export default rootReducer;
