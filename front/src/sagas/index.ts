import { all } from 'redux-saga/effects';
import watchRanking from './rankingSaga';
import watchSetting from './settingSaga';
import getLogin from './loginSaga';

export default function* rootSaga() {
    yield all([watchRanking(), watchSetting(), getLogin()]);
}