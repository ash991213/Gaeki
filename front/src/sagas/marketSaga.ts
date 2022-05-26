import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const typingUpAPI = async () => {
    return await axios.post('http://localhost:4000/market/status');
};

function* typingUp() {
    const result: { data: {} } = yield call(typingUpAPI);
    console.log(result.data);
}

const asdfAPI = async () => {
    return await axios.post('http://localhost:4000/market/show');
};

function* asdf() {
    const result: { data: {} } = yield call(asdfAPI);
    console.log(result.data);
}

export default function* market() {
    // yield takeLatest('TYPING_UP_REQUEST', typingUp);
    // yield takeLatest('asdf', asdf);
}
