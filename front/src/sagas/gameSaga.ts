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
    return await axios.post('http://localhost:4000/game/user', body);
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
        user: { user_idx, gold },
    } = action;

    const body = {
        typing,
        user_idx,
        gold,
    };
    return await axios.post('http://localhost:4000/game/click', body);
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

export default function* watchRanking() {
    yield takeLatest('USER_INFO_REQUEST', user);
    yield takeLatest('GOLD_CLICK_REQUEST', gold_click);
}
