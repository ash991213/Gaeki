import { all } from 'redux-saga/effects';
import watchRanking from './rankingSaga';
import watchSetting from './settingSaga';
import watchUser from './gameSaga';
import market from './marketSaga';

export default function* rootSaga() {
    yield all([watchRanking(), watchSetting(), watchUser(),market()]);
}
