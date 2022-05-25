import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

interface resultType {
    data: {};
}

const infoAPI: any = async () => {
    return await axios.post('http://localhost:4000/info', null);
};

function* info() {
    // console.log(action); {type: 'INFO_REQUEST'}
    try {
        const result: resultType = yield call(infoAPI, null);
        yield put({ type: 'INFO_SUCCESS', payload: result.data });
    } catch (e) {
        yield put({ type: 'INFO_FAILRE' });
    }
}

export default function* watchInfo() {
    yield takeLatest('INFO_REQUEST', info);
}
