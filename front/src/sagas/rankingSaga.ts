import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const rankAPI = async (action: number) => {
    const body = { num: action };
    return await axios.post('http://localhost:4000/rank/list', body);
};

interface resultType {
    data: {};
}

function* ranking(action: any) {
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

export default function* watchRanking() {
    yield takeLatest('RANKING_LIST_REQUEST', ranking);
}
