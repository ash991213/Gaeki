import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../reducers/login'

const gloginAPI = async (action: any) => {
    const body = action;
    return await axios.get('http://localhost:4000/auth',body)
};

interface resultType {

}

function* handleLogin(action: any) {
    try {
        const result: resultType = yield call(gloginAPI, null);
        console.log(result)
        
        yield put({
            type:  LOGIN_SUCCESS
        });
    } catch(e) {
        // yield put({
        //     type: ''
        // });
        console.log(e)
    }
}

export default function* getLogin() {
    yield takeLatest(LOGIN_REQUEST, handleLogin);
}
