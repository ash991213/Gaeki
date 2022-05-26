const initialState = {
    user_idx: null,
    effectOn: true,
    backOn: true,
};

const EFFECT_BUTTON_REQUEST = 'EFFECT_BUTTON_REQUEST';
const EFFECT_BUTTON_SUCCESS = 'EFFECT_BUTTON_SUCCESS';
const EFFECT_BUTTON_FAILURE = 'EFFECT_BUTTON_FAILURE';
const BACK_BUTTON_REQUEST = 'BACK_BUTTON_REQUEST';
const BACK_BUTTON_SUCCESS = 'BACK_BUTTON_SUCCESS';
const BACK_BUTTON_FAILURE = 'BACK_BUTTON_FAILURE';

const setting = (state = initialState, action: any) => {
    switch (action.type) {
        case EFFECT_BUTTON_REQUEST:
            return {
                ...state,
            };
        case EFFECT_BUTTON_SUCCESS:
            return {
                ...state,
                effectOn: !state.effectOn,
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
                backOn: !state.backOn,
            };
        case BACK_BUTTON_FAILURE:
            return {
                ...state,
            };
        default: {
            return state;
        }
    }
};

export default setting;
