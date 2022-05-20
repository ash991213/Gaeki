import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const plusAPI = async (action: any) => {
    const body: any = { action };
    return await axios.post('http://localhost:4000/count/plus', body, {
        headers: { 'Content-Type': 'application/json' },
    });
};

interface resultType {
    data: number;
}

function* handlePlus(action: any) {
    try {
        const result: resultType = yield call(plusAPI, action.payload);

        yield put({
            type: 'PLUS_CLICK_SUCCESS',
        });
    } catch (e) {
        yield put({
            type: 'PLUS_CLICK_FAILED',
        });
    }
}

const minusAPI = async (action: any) => {
    const body = { action };
    return await axios.post('http://localhost:4000/count/minus', body, {
        headers: { 'Content-Type': 'application/json' },
    });
};

function* handleMinus(action: any) {
    try {
        const result: resultType = yield call(minusAPI, action.payload);
        yield put({
            type: 'MINUS_CLICK_SUCCESS',
        });
    } catch (e) {
        yield put({
            type: 'MINUS_CLICK_FAILED',
        });
    }
}

const countAPI = async () => {
    return await axios.post('http://localhost:4000/count/list', null);
};

function* counteNumber() {
    try {
        const result: resultType = yield call(countAPI);
        const action = result.data;
        yield put({
            type: 'COUNTING_NUMBER_SUCCESS',
            action,
        });
    } catch (e) {
        yield put({
            type: 'COUNTING_NUMBER_FAILED',
        });
    }
}

export default function* watchCounter() {
    yield takeLatest('PLUS_CLICK_REQUEST', handlePlus);
    yield takeLatest('MINUS_CLICK_REQUEST', handleMinus);
    yield takeLatest('COUNTING_NUMBER_REQUEST', counteNumber);
}
