const initialState = {
    user_idx: null,
    nickname: null,
    image: null,
    stage: null,
    gauge: null,
    gold: null,
    exp: null,
    background_sound: null,
    sound_effect: null,
    status: {
        coding: null,
        hp: null,
        luck: null,
        patience: null,
        typing: null,
    },
    auto: {
        pc: null,
        desk: null,
        chair: null,
        cheer: null,
        cook: null,
        homekeeper: null,
        vehicle: null,
    },
    error: null,
};

const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
const USER_INFO_FAILURE = 'USER_INFO_FAILURE';
const GOLD_CLICK_REQUEST = 'GOLD_CLICK_REQUEST';
const GOLD_CLICK_SUCCESS = 'GOLD_CLICK_SUCCESS';
const GOLD_CLICK_FAILURE = 'GOLD_CLICK_FAILURE';
const EFFECT_BUTTON_REQUEST = 'EFFECT_BUTTON_REQUEST';
const EFFECT_BUTTON_SUCCESS = 'EFFECT_BUTTON_SUCCESS';
const EFFECT_BUTTON_FAILURE = 'EFFECT_BUTTON_FAILURE';
const BACK_BUTTON_REQUEST = 'BACK_BUTTON_REQUEST';
const BACK_BUTTON_SUCCESS = 'BACK_BUTTON_SUCCESS';
const BACK_BUTTON_FAILURE = 'BACK_BUTTON_FAILURE';
const TYPING_UP_REQUEST = 'TYPING_UP_REQUEST';
const TYPING_UP_SUCCESS = 'TYPING_UP_SUCCESS';
const TYPING_UP_FAILURE = 'TYPING_UP_FAILURE';
const STATUS_REQUEST = 'STATUS_REQUEST';
const STATUS_SUCCESS = 'STATUS_SUCCESS';
const STATUS_FAILURE = 'STATUS_FAILURE';
const AUTO_REQUEST = 'AUTO_REQUEST';
const AUTO_SUCCESS = 'AUTO_SUCCESS';
const AUTO_FAILURE = 'AUTO_FAILURE';
const AUTO_DESK_REQUEST = 'AUTO_DESK_REQUEST';
const AUTO_DESK_SUCCESS = 'AUTO_DESK_SUCCESS';
const AUTO_DESK_FAILURE = 'AUTO_DESK_FAILURE';

interface actionType {
    type: string;
    payload: any;
}

const user = (state = initialState, action: actionType) => {
    switch (action.type) {
        case USER_INFO_REQUEST:
            return {
                ...state,
            };
        case USER_INFO_SUCCESS:
            const {
                id,
                nickname,
                image,
                stage,
                gauge,
                gold,
                exp,
                background_sound,
                sound_effect,
            } = action.payload;
            return {
                ...state,
                user_idx: id,
                nickname,
                image,
                stage,
                gauge,
                gold,
                exp,
                background_sound,
                sound_effect,
            };
        case USER_INFO_FAILURE:
            return {
                ...state,
            };
        case GOLD_CLICK_REQUEST:
            return {
                ...state,
            };
        case GOLD_CLICK_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
            };
        case GOLD_CLICK_FAILURE:
            return {
                ...state,
            };
        case EFFECT_BUTTON_REQUEST:
            return {
                ...state,
            };
        case EFFECT_BUTTON_SUCCESS:
            return {
                ...state,
                sound_effect: !state.sound_effect,
            };
        case EFFECT_BUTTON_FAILURE:
            return {
                ...state,
            };
        case BACK_BUTTON_REQUEST:
            return {
                ...state,
            };
        case BACK_BUTTON_SUCCESS:
            return {
                ...state,
                background_sound: !state.background_sound,
            };
        case BACK_BUTTON_FAILURE:
            return {
                ...state,
            };
        case TYPING_UP_REQUEST:
            return {
                ...state,
            };
        case TYPING_UP_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                status: {
                    ...state.status,
                    typing: action.payload.typing,
                },
            };
        case TYPING_UP_FAILURE:
            return {
                ...state,
                error: action.payload.errno,
            };
        case STATUS_REQUEST:
            return {
                ...state,
            };
        case STATUS_SUCCESS:
            const { coding, hp, luck, patience, typing } = action.payload;
            return {
                ...state,
                status: {
                    coding,
                    hp,
                    luck,
                    patience,
                    typing,
                },
            };
        case STATUS_FAILURE:
            return {
                ...state,
            };
        case AUTO_REQUEST:
            return {
                ...state,
            };
        case AUTO_SUCCESS:
            const { chair, cheer, cook, desk, homekeeper, pc, vehicle } =
                action.payload;
            return {
                ...state,
                auto: { chair, cheer, cook, desk, homekeeper, pc, vehicle },
            };
        case AUTO_FAILURE:
            return {
                ...state,
            };
        case AUTO_DESK_REQUEST:
            return {
                ...state,
            };
        case AUTO_DESK_SUCCESS:
            return {
                ...state,
                auto: { ...state.auto, desk: action.payload.desk },
            };
        case AUTO_DESK_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default user;
