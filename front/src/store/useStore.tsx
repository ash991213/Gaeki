import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas/index';

const configureStore = () => {
    const sagaMiddlewares = createSaga(); // Saga 미들웨어 생성
    const Middlewares = [sagaMiddlewares]; // Saga 미들웨어를 미들웨어에 담아주기
    const enhancer =
        process.env.NODE_ENV === 'production'
            ? compose(applyMiddleware(...Middlewares)) // 배포모드
            : composeWithDevTools(applyMiddleware(...Middlewares)); // 개발모드
    const Store: any = createStore(reducer, enhancer); // rootReducer : 여러 reducer 들을 combineReducers로 하나로 묶어줍니다. / enhancer :  redux의 기능을 도와주는 미들웨어나 데브 툴즈
    Store.sagaTask = sagaMiddlewares.run(rootSaga); // sagaMiddleware.run : rootSaga를 실행해줍니다. / rootSaga : 모든 saga들이 action을 watching 해야하기 때문에 전체 관리 rootSaga를 만들어줍니다.
    return Store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper; // store 만들어서 app.jsx에서 사용할거
