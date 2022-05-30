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

const STATUS_REQUEST = 'STATUS_REQUEST';
const STATUS_SUCCESS = 'STATUS_SUCCESS';
const STATUS_FAILURE = 'STATUS_FAILURE';
const TYPING_UP_REQUEST = 'TYPING_UP_REQUEST';
const TYPING_UP_SUCCESS = 'TYPING_UP_SUCCESS';
const TYPING_UP_FAILURE = 'TYPING_UP_FAILURE';
const HP_UP_REQUEST = 'HP_UP_REQUEST';
const HP_UP_SUCCESS = 'HP_UP_SUCCESS';
const HP_UP_FAILURE = 'HP_UP_FAILURE';
const LUCK_UP_REQUEST = 'LUCK_UP_REQUEST';
const LUCK_UP_SUCCESS = 'LUCK_UP_SUCCESS';
const LUCK_UP_FAILURE = 'LUCK_UP_FAILURE';
const PATIENCE_UP_REQUEST = 'PATIENCE_UP_REQUEST';
const PATIENCE_UP_SUCCESS = 'PATIENCE_UP_SUCCESS';
const PATIENCE_UP_FAILURE = 'PATIENCE_UP_FAILURE';
const CODING_UP_REQUEST = 'CODING_UP_REQUEST';
const CODING_UP_SUCCESS = 'CODING_UP_SUCCESS';
const CODING_UP_FAILURE = 'CODING_UP_SUCCESS';
const HP_DOWN_REQUEST = 'HP_DOWN_REQUEST';
const HP_DOWN_SUCCESS = 'HP_DOWN_SUCCESS';
const HP_DOWN_FAILURE = 'HP_DOWN_FAILURE';
const GOLDEXP_CLICK_REQUEST = 'GOLDEXP_CLICK_REQUEST';
const GOLDEXP_CLICK_SUCCESS = 'GOLDEXP_CLICK_SUCCESS';
const GOLDEXP_CLICK_FAILURE = 'GOLDEXP_CLICK_SUCCESS';
const BUG_REQUEST = 'BUG_REQUEST';
const BUG_SUCCESS = 'BUG_SUCCESS';
const BUG_FAILURE = 'BUG_FAILURE';

const AUTO_GOLD_REQUEST = 'AUTO_GOLD_REQUEST';
const AUTO_GOLD_SUCCESS = 'AUTO_GOLD_SUCCESS';
const AUTO_GOLD_FAILURE = 'AUTO_GOLD_FAILURE';
const AUTO_REQUEST = 'AUTO_REQUEST';
const AUTO_SUCCESS = 'AUTO_SUCCESS';
const AUTO_FAILURE = 'AUTO_FAILURE';
const AUTO_DESK_REQUEST = 'AUTO_DESK_REQUEST';
const AUTO_DESK_SUCCESS = 'AUTO_DESK_SUCCESS';
const AUTO_DESK_FAILURE = 'AUTO_DESK_FAILURE';
const AUTO_CHAIR_REQUEST = 'AUTO_CHAIR_REQUEST';
const AUTO_CHAIR_SUCCESS = 'AUTO_CHAIR_SUCCESS';
const AUTO_CHAIR_FAILURE = 'AUTO_CHAIR_FAILURE';
const AUTO_PC_REQUEST = 'AUTO_PC_REQUEST';
const AUTO_PC_SUCCESS = 'AUTO_PC_SUCCESS';
const AUTO_PC_FAILURE = 'AUTO_PC_FAILURE';
const AUTO_COOK_REQUEST = 'AUTO_COOK_REQUEST';
const AUTO_COOK_SUCCESS = 'AUTO_COOK_SUCCESS';
const AUTO_COOK_FAILURE = 'AUTO_COOK_FAILURE';
const AUTO_HOMEKEEPER_REQUEST = 'AUTO_HOMEKEEPER_REQUEST';
const AUTO_HOMEKEEPER_SUCCESS = 'AUTO_HOMEKEEPER_SUCCESS';
const AUTO_HOMEKEEPER_FAILURE = 'AUTO_HOMEKEEPER_FAILURE';
const AUTO_VEHICLE_REQUEST = 'AUTO_VEHICLE_REQUEST';
const AUTO_VEHICLE_SUCCESS = 'AUTO_VEHICLE_SUCCESS';
const AUTO_VEHICLE_FAILURE = 'AUTO_VEHICLE_FAILURE';

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
            };
        case HP_UP_REQUEST:
            return {
                ...state,
            };
        case HP_UP_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                status: {
                    ...state.status,
                    hp: action.payload.hp,
                },
            };
        case HP_UP_FAILURE:
            return {
                ...state,
            };
        case LUCK_UP_REQUEST:
            return {
                ...state,
            };
        case LUCK_UP_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                status: {
                    ...state.status,
                    luck: action.payload.luck,
                },
            };
        case LUCK_UP_FAILURE:
            return {
                ...state,
            };
        case PATIENCE_UP_REQUEST:
            return {
                ...state,
            };
        case PATIENCE_UP_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                status: {
                    ...state.status,
                    patience: action.payload.patience,
                },
            };
        case PATIENCE_UP_FAILURE:
            return {
                ...state,
            };
        case CODING_UP_REQUEST:
            return {
                ...state,
            };
        case CODING_UP_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                gold: action.payload.gold,
                status: {
                    ...state.status,
                    coding: action.payload.coding,
                },
            };
        case CODING_UP_FAILURE:
            return {
                ...state,
            };
        case HP_DOWN_REQUEST:
            return {
                ...state,
            };
        case HP_DOWN_SUCCESS:
            return {
                ...state,
                gauge: action.payload.gauge,
            };
        case HP_DOWN_FAILURE:
            return {
                ...state,
            };
        case GOLDEXP_CLICK_REQUEST:
            return {
                ...state,
            };
        case GOLDEXP_CLICK_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                exp: action.payload.exp,
                stage: action.payload.stage,
            };
        case GOLDEXP_CLICK_FAILURE:
            return {
                ...state,
            };
        case BUG_REQUEST:
            return {
                ...state,
            };
        case BUG_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                gauge: action.payload.gauge,
            };
        case BUG_FAILURE:
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
        case AUTO_GOLD_REQUEST:
            return {
                ...state,
            };
        case AUTO_GOLD_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
            };
        case AUTO_GOLD_FAILURE:
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
                gold: action.payload.gold,
                auto: { ...state.auto, desk: action.payload.desk },
            };
        case AUTO_DESK_FAILURE:
            return {
                ...state,
            };
        case AUTO_CHAIR_REQUEST:
            return {
                ...state,
            };
        case AUTO_CHAIR_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                auto: { ...state.auto, chair: action.payload.chair },
            };
        case AUTO_CHAIR_FAILURE:
            return {
                ...state,
            };
        case AUTO_PC_REQUEST:
            return {
                ...state,
            };
        case AUTO_PC_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                auto: { ...state.auto, pc: action.payload.pc },
            };
        case AUTO_PC_FAILURE:
            return {
                ...state,
            };
        case AUTO_COOK_REQUEST:
            return {
                ...state,
            };
        case AUTO_COOK_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                auto: { ...state.auto, cook: action.payload.cook },
            };
        case AUTO_COOK_FAILURE:
            return {
                ...state,
            };
        case AUTO_HOMEKEEPER_REQUEST:
            return {
                ...state,
            };
        case AUTO_HOMEKEEPER_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                auto: { ...state.auto, homekeeper: action.payload.homekeeper },
            };
        case AUTO_HOMEKEEPER_FAILURE:
            return {
                ...state,
            };
        case AUTO_VEHICLE_REQUEST:
            return {
                ...state,
            };
        case AUTO_VEHICLE_SUCCESS:
            return {
                ...state,
                gold: action.payload.gold,
                auto: { ...state.auto, vehicle: action.payload.vehicle },
            };
        case AUTO_VEHICLE_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default user;
