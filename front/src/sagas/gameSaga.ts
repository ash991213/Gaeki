import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

interface actionType {
    payload: {};
    type: string;
}

interface resultType {
    data: {};
}

const userAPI = async (action: any) => {
    const body = {
        user_idx: action,
    };
    return await axios.post('http://15.164.141.28:81/game/user', body);
};

function* user(action: actionType) {
    try {
        const result: resultType = yield call(userAPI, action.payload);
        yield put({
            type: 'USER_INFO_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'USER_INFO_FAILURE',
        });
    }
}

const gold_clickAPI = async (action: any) => {
    const {
        typing,
        luck,
        user: { user_idx, gold, gauge },
    } = action;

    const body = {
        typing,
        user_idx,
        gold,
        luck,
        gauge,
    };
    return await axios.post('http://15.164.141.28:81/game/click', body);
};

function* gold_click(action: any) {
    try {
        const result: { data: {} } = yield call(gold_clickAPI, action.payload);
        yield put({
            type: 'GOLD_CLICK_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'GOLD_CLICK_FAILURE',
        });
    }
}

const hpDownAPI = async (action: any) => {
    return await axios.post(
        'http://15.164.141.28:81/game/hpDown',
        action.payload
    );
};

function* hpDown(action: any) {
    const result: { data: {} } = yield call(hpDownAPI, action);
    try {
        yield put({
            type: 'HP_DOWN_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'HP_DOWN_FAILURE',
        });
    }
}

const gold_exp_clickAPI = async (action: any) => {
    return await axios.post(
        'http://15.164.141.28:81/game/gold_exp',
        action.payload
    );
};

function* gold_exp_click(action: any) {
    const result: { data: {} } = yield call(gold_exp_clickAPI, action);
    try {
        yield put({
            type: 'GOLDEXP_CLICK_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'GOLDEXP_CLICK_FAILURE',
            payload: result.data,
        });
    }
}

const bugAPI = async (action: any) => {
    return await axios.post('http://15.164.141.28:81/game/bug', action.payload);
};

function* bug(action: any) {
    const result: { data: {} } = yield call(bugAPI, action);
    try {
        yield put({
            type: 'BUG_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'BUG_FAILURE',
            payload: result.data,
        });
    }
}

export default function* watchRanking() {
    yield takeLatest('USER_INFO_REQUEST', user);
    yield takeLatest('GOLD_CLICK_REQUEST', gold_click);
    yield takeLatest('GOLDEXP_CLICK_REQUEST', gold_exp_click);
    yield takeLatest('HP_DOWN_REQUEST', hpDown);
    yield takeLatest('BUG_REQUEST', bug);
}
