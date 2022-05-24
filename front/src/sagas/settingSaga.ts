import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

interface actionType {
    payload: string;
    type: string;
}

interface resultType {
    data: {};
}

const EffectAPI = async (action: any) => {
    const { userid, effectOn } = action;
    const body = {
        userid,
        effectOn,
    };
    return await axios.post('http://localhost:4000/setting/effect', body);
};

function* effect(action: actionType) {
    try {
        yield call(EffectAPI, action);

        yield put({
            type: 'EFFECT_BUTTON_SUCCESS',
        });
    } catch (e) {
        yield put({
            type: 'EFFECT_BUTTON_FAILURE',
        });
    }
}

const BackAPI = async (action: any) => {
    const { userid, backOn } = action;
    const body = {
        userid,
        backOn,
    };
    return await axios.post('http://localhost:4000/setting/back', body);
};

function* back(action: actionType) {
    try {
        yield call(BackAPI, action);

        yield put({
            type: 'BACK_BUTTON_SUCCESS',
        });
    } catch (e) {
        yield put({
            type: 'BACK_BUTTON_FAILURE',
        });
    }
}

export default function* watchSetting() {
    yield takeLatest('EFFECT_BUTTON_REQUEST', effect);
    yield takeLatest('BACK_BUTTON_REQUEST', back);
}
