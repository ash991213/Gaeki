interface marketType {
    clickgold: boolean;
    ignoregold: boolean;
    ignoreexp: boolean;
    market: {
        stat: {
            typing: number;
        };
    };
}

const initialState: marketType = {
    clickgold: false,
    ignoregold: false,
    ignoreexp: false,
    market: {
        stat: {
            typing: 1,
        },
    },
};

const CLICK_GOLD = 'CLICK_GOLD';
const IGNORE_GOLD = 'IGNORE_GOLD';
const IGNORE_EXP = 'IGNORE_EXP';
const TYPING_UP_REQUEST = 'TYPING_UP_REQUEST';
const TYPING_UP_SUCCESS = 'TYPING_UP_SUCCESS';
const TYPING_UP_FAILURE = 'TYPING_UP_FAILURE';

const market = (state: marketType = initialState, action: any) => {
    switch (action.type) {
        case CLICK_GOLD:
            return {
                ...state,
                clickgold: !state.clickgold,
                ignoregold: false,
                ignoreexp: false,
            };
        case IGNORE_GOLD:
            return {
                ...state,
                ignoregold: !state.ignoregold,
                clickgold: false,
                ignoreexp: false,
            };
        case IGNORE_EXP:
            return {
                ...state,
                ignoreexp: !state.ignoreexp,
                clickgold: false,
                ignoregold: false,
            };
        case TYPING_UP_REQUEST:
            return {
                ...state,
            };
        case TYPING_UP_SUCCESS:
            return {
                ...state,
            };
        case TYPING_UP_FAILURE:
            return {
                ...state,
            };
        case 'asdf':
            return {
                ...state,
            };
        default: {
            return state;
        }
    }
};

export default market;
