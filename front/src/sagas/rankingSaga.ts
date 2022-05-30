import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

interface resultType {
    data: {};
}

interface actionType {
    payload: number;
    type: string;
}

const rankAPI = async (action: number) => {
    const body = { num: action };
    return await axios.post('http://localhost:4000/ranking/list', body);
};

function* ranking(action: actionType) {
    try {
        const result: resultType = yield call(rankAPI, action.payload);
        const { list }: any = result.data;

        yield put({
            type: 'RANKING_LIST_SUCCESS',
            payload: list,
        });
    } catch (e) {
        yield put({
            type: 'RANKING_LIST_FAILURE',
        });
    }
}

const myrankAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/ranking/myrank', action);
};

function* myranking(action: any) {
    const result: resultType = yield call(myrankAPI, action.payload);
    try {
        yield put({
            type: 'MY_RANKING_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'MY_RANKING_FAILURE',
        });
    }
}

export default function* watchRanking() {
    yield takeLatest('RANKING_LIST_REQUEST', ranking);
    yield takeLatest('MY_RANKING_REQUEST', myranking);
}
