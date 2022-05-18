import { all } from 'redux-saga/effects';
import watchCounter from './counterSaga';

export default function* rootSaga() {
    yield all([watchCounter()]);
}
