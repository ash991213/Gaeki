import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

interface actionType {
    payload: string;
    type: string;
}

const EffectAPI = async (action: any) => {
    const { user_idx, sound_effect } = action;
    const body = {
        user_idx,
        sound_effect,
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
    const { user_idx, background_sound } = action;
    const body = {
        user_idx,
        background_sound,
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
