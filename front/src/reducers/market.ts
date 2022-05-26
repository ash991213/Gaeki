const initialState = {
    clickgold: false,
    ignoregold: false,
    ignoreexp: false,
};

const CLICK_GOLD = 'CLICK_GOLD';
const IGNORE_GOLD = 'IGNORE_GOLD';
const IGNORE_EXP = 'IGNORE_EXP';

const market = (state: any = initialState, action: any) => {
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
        default: {
            return state;
        }
    }
};

export default market;
