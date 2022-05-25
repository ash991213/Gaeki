import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const typingUpAPI = async () => {
    return await axios.post('http://localhost:4000/market/stat');
};

function* typingUp() {
    const result: { data: {} } = yield call(typingUpAPI);
    console.log(result.data);
}

export default function* market() {
    yield takeLatest('TYPING_UP_REQUEST', typingUp);
}
