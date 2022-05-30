import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const typingUpAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/typing', action);
};

function* typingUp(action: any) {
    const result: { data: any } = yield call(typingUpAPI, action.payload);
    try {
        if (result.data.errno === 0) throw new Error('골드가 부족합니다.');
        yield put({
            type: 'TYPING_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'TYPING_UP_FAILURE',
            payload: result.data,
        });
    }
}

const statusAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/status_Show', action);
};

function* status(action: any) {
    const result: { data: {} } = yield call(statusAPI, action.payload);
    try {
        yield put({
            type: 'STATUS_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'STATUS_FAILURE',
        });
    }
}

const autoAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Show', action);
};

function* auto(action: any) {
    const result: { data: {} } = yield call(autoAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_FAILURE',
        });
    }
}

const hpAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/hp', action);
};

function* hpUp(action: any) {
    const result: { data: {} } = yield call(hpAPI, action.payload);
    try {
        yield put({
            type: 'HP_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'HP_UP_FAILURE',
        });
    }
}

const autoDeskAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Desk', action);
};

function* auto_desk(action: any) {
    const result: { data: {} } = yield call(autoDeskAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_DESK_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_DESK_FAILURE',
        });
    }
}

const luckAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/luck', action);
};

function* lcukUp(action: any) {
    const result: { data: {} } = yield call(luckAPI, action.payload);
    try {
        yield put({
            type: 'LUCK_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'LUCK_UP_FAILURE',
        });
    }
}

const patienceAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/patience', action);
};

function* patienceUp(action: any) {
    const result: { data: {} } = yield call(patienceAPI, action.payload);
    try {
        yield put({
            type: 'PATIENCE_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'PATIENCE_UP_FAILURE',
        });
    }
}

const codingAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/coding', action);
};

function* codingUp(action: any) {
    const result: { data: {} } = yield call(codingAPI, action.payload);
    try {
        yield put({
            type: 'CODING_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'CODING_UP_FAILURE',
        });
    }
}

export default function* market() {
    yield takeLatest('STATUS_REQUEST', status);
    yield takeLatest('TYPING_UP_REQUEST', typingUp);
    yield takeLatest('AUTO_REQUEST', auto);
    yield takeLatest('AUTO_DESK_REQUEST', auto_desk);
    yield takeLatest('HP_UP_REQUEST', hpUp);
    yield takeLatest('LUCK_UP_REQUEST', lcukUp);
    yield takeLatest('PATIENCE_UP_REQUEST', patienceUp);
    yield takeLatest('CODING_UP_REQUEST', codingUp);
}
