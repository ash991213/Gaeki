import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

const typingUpAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/typing', action);
};

function* typingUp(action: any) {
    const result: { data: any } = yield call(typingUpAPI, action.payload);
    try {
        if (result.data.errno === 0) throw new Error('골드가 부족합니다.');
        yield put({
            type: 'TYPING_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'TYPING_UP_FAILURE',
            payload: result.data,
        });
    }
}

const statusAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/status_Show', action);
};

function* status(action: any) {
    const result: { data: {} } = yield call(statusAPI, action.payload);
    try {
        yield put({
            type: 'STATUS_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'STATUS_FAILURE',
        });
    }
}

const autoAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Show', action);
};

function* auto(action: any) {
    const result: { data: {} } = yield call(autoAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_FAILURE',
        });
    }
}

const hpAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/hp', action);
};

function* hpUp(action: any) {
    const result: { data: {} } = yield call(hpAPI, action.payload);
    try {
        yield put({
            type: 'HP_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'HP_UP_FAILURE',
        });
    }
}

const luckAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/luck', action);
};

function* lcukUp(action: any) {
    const result: { data: {} } = yield call(luckAPI, action.payload);
    try {
        yield put({
            type: 'LUCK_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'LUCK_UP_FAILURE',
        });
    }
}

const patienceAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/patience', action);
};

function* patienceUp(action: any) {
    const result: { data: {} } = yield call(patienceAPI, action.payload);
    try {
        yield put({
            type: 'PATIENCE_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'PATIENCE_UP_FAILURE',
        });
    }
}

const codingAPI = async (action: any) => {
    return await axios.post('http://localhost:4000/market/coding', action);
};

function* codingUp(action: any) {
    const result: { data: {} } = yield call(codingAPI, action.payload);
    try {
        yield put({
            type: 'CODING_UP_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'CODING_UP_FAILURE',
        });
    }
}

const autoGoldAPI: any = async (action: any) => {
    return await axios.post(
        'http://localhost:4000/market/auto_Gold',
        action.payload
    );
};

function* auto_Gold(action: any) {
    const result: { data: {} } = yield call(autoGoldAPI, action);
    try {
        yield put({
            type: 'AUTO_GOLD_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_GOLD_FAILURE',
        });
    }
}

const autoDeskAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Desk', action);
};

const autoChairAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Chair', action);
};
const autoPcAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Pc', action);
};
const autoCookAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Cook', action);
};
const autoHomekeeperAPI: any = async (action: any) => {
    return await axios.post(
        'http://localhost:4000/market/auto_Homekeeper',
        action
    );
};
const autoVehicleAPI: any = async (action: any) => {
    return await axios.post(
        'http://localhost:4000/market/auto_Vehicle',
        action
    );
};

function* auto_desk(action: any) {
    const result: { data: {} } = yield call(autoDeskAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_DESK_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_DESK_FAILURE',
        });
    }
}

function* auto_chair(action: any) {
    const result: { data: {} } = yield call(autoChairAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_CHAIR_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_CHAIR_FAILURE',
        });
    }
}

function* auto_pc(action: any) {
    const result: { data: {} } = yield call(autoPcAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_PC_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_PC_FAILURE',
        });
    }
}
function* auto_cook(action: any) {
    const result: { data: {} } = yield call(autoCookAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_COOK_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_COOK_FAILURE',
        });
    }
}
function* auto_homekeeper(action: any) {
    const result: { data: {} } = yield call(autoHomekeeperAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_HOMEKEEPER_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_HOMEKEEPER_FAILURE',
        });
    }
}
function* auto_vehicle(action: any) {
    const result: { data: {} } = yield call(autoVehicleAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_VEHICLE_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_VEHICLE_FAILURE',
        });
    }
}

const autoCheerAPI: any = async (action: any) => {
    return await axios.post('http://localhost:4000/market/auto_Cheer', action);
};

function* auto_cheer(action: any) {
    const result: { data: {} } = yield call(autoCheerAPI, action.payload);
    try {
        yield put({
            type: 'AUTO_CHEER_SUCCESS',
            payload: result.data,
        });
    } catch (e) {
        yield put({
            type: 'AUTO_CHEER_FAILURE',
        });
    }
}

const autoExpAPI:any = async(action:any) => {
    return await axios.post('http://localhost:4000/market/exp_Show',action)
}

function* auto_Exp(action: any) {
    const result: { data: {} } = yield call(autoExpAPI, action.payload)
    try {
        yield put({
            type: 'EXP_SUCCESS',
            payload:result.data,
        });    
    } catch (e) {
        yield put({
            type: 'EXP_FAILURE',
        });
    }
}

const dogExpAPI:any = async(action:any) => {
    return await axios.post('http://localhost:4000/market/exp_Dog',action)
}

function* dog_Exp(action:any){
    const result: {data: {}} = yield call(dogExpAPI, action.payload)
    try{
        yield put({
            type:'EXP_DOG_SUCCESS',
            payload:result.data,
        });
    }catch(e){
        yield put({
            type:'EXP_DOG_FAILURE'
        });
    }
}

const catExpAPI:any = async(action:any) => {
    return await axios.post('http://localhost:4000/market/exp_Cat',action)
}

function* cat_Exp(action:any){
    const result:{data:{}} = yield call(catExpAPI, action.payload)
    try{
        yield put({
            type:'EXP_CAT_SUCCESS', 
            payload:result.data,
        });
    }catch(e){
        yield put({
            type:"EXP_CAT_FAILURE"
        });
    }
}

const fishExpAPI:any = async(action:any) => {
    return await axios.post('http://localhost:4000/market/exp_Fish',action)
}

function* fish_Exp(action:any){
    const result:{data:{}} = yield call(fishExpAPI, action.payload)
    try{
        yield put({
            type:'EXP_FISH_SUCCESS',
            payload:result.data,
        });
    }catch(e){
        yield put({
            type:'EXP_FISH_FAILURE'
        })
    }
}

const birdExpAPI:any = async(action:any) => {
    return await axios.post('http://localhost:4000/market/exp_Bird',action)
}

function* bird_Exp(action:any){
    const result:{data:{}} = yield call(birdExpAPI, action.payload)
    try{
        yield put({
            type:'EXP_BIRD_SUCCESS',
            payload:result.data,
        });
    }catch(e){
        yield put({
            type:'EXP_BIRD_FAILURE'
        })
    }
}

const guageExpAPI:any = async(action:any) => {
    return await axios.post('http://localhost:4000/market/guage_Exp',action)
}

function* guage_Exp(action:any){
    const result:{data:{}} = yield call(guageExpAPI, action.payload)
    try{
        yield put({
            type:'EXP_GUAGE_SUCCESS',
            payload:result.data,
        })
    }catch(e){
        yield put({
            type:'EXP_GUAGE_FAILURE'
        })
    }
}

export default function* market() {
    yield takeLatest('STATUS_REQUEST', status);
    yield takeLatest('AUTO_REQUEST', auto);
    yield takeLatest('TYPING_UP_REQUEST', typingUp);
    yield takeLatest('HP_UP_REQUEST', hpUp);
    yield takeLatest('LUCK_UP_REQUEST', lcukUp);
    yield takeLatest('PATIENCE_UP_REQUEST', patienceUp);
    yield takeLatest('CODING_UP_REQUEST', codingUp);
    yield takeLatest('AUTO_GOLD_REQUEST', auto_Gold);
    yield takeLatest('AUTO_DESK_REQUEST', auto_desk);
    yield takeLatest('AUTO_CHAIR_REQUEST', auto_chair);
    yield takeLatest('AUTO_PC_REQUEST', auto_pc);
    yield takeLatest('AUTO_COOK_REQUEST', auto_cook);
    yield takeLatest('AUTO_HOMEKEEPER_REQUEST', auto_homekeeper);
    yield takeLatest('AUTO_VEHICLE_REQUEST', auto_vehicle);
    yield takeLatest('AUTO_CHEER_REQUEST', auto_cheer);
    yield takeLatest('EXP_REQUEST' , auto_Exp);
    yield takeLatest('EXP_DOG_REQUEST', dog_Exp);
    yield takeLatest('EXP_CAT_REQUEST',cat_Exp);
    yield takeLatest('EXP_FISH_REQUEST',fish_Exp);
    yield takeLatest('EXP_BIRD_REQUEST',bird_Exp);
    yield takeLatest('EXP_GUAGE_REQUEST',guage_Exp);
}
