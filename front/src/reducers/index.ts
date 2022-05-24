import { combineReducers } from 'redux';
import setting from './setting';
import ranking from './ranking';
import market from './market';
import login from './login';
<<<<<<< HEAD

const rootReducer = combineReducers({ counter, ranking ,setting, market, login});


=======
const rootReducer = combineReducers({ ranking ,setting, market ,login});
>>>>>>> bee20926da342597b94b7fcfc22648b764451289

export default rootReducer;
