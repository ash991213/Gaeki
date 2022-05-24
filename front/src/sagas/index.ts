import { all } from 'redux-saga/effects';
import watchCounter from './counterSaga';
import watchRanking from './rankingSaga';
import getLogin from './loginSaga';

export default function* rootSaga() {
    yield all([watchCounter(), watchRanking(), getLogin()]);
}
