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

export default function* watchRanking() {
    yield takeLatest('USER_INFO_REQUEST', user);
}
