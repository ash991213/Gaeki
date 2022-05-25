import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

interface resultType {
    data: {};
}

const infoAPI: any = async () => {
    return await axios.post('http://localhost:4000/game/info', null);
};

function* info() {
    try {
        const result: resultType = yield call(infoAPI, null);
        yield put({ type: 'INFO_SUCCESS', payload: result.data });
    } catch (e) {
        yield put({ type: 'INFO_FAILURE' });
    }
}

const Gold_ClickAPI: any = async (action: {}) => {
    return await axios.post('http://localhost:4000/game/click', action);
};

function* Gold_Click(action: { payload: {} }) {
    try {
        const result: resultType = yield call(Gold_ClickAPI, action.payload);

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

export default function* watchInfo() {
    yield takeLatest('INFO_REQUEST', info);
    yield takeLatest('GOLD_CLICK_REQUEST', Gold_Click);
}
