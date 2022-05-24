import { all } from 'redux-saga/effects';
import watchCounter from './counterSaga';
import watchRanking from './rankingSaga';
import watchSetting from './settingSaga';

export default function* rootSaga() {
    yield all([watchCounter(), watchRanking(), watchSetting()]);
}
