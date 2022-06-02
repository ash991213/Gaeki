const initialState = {
    clickgold: false,
    ignoregold: false,
    ignoreexp: false,
    playTime: null
};

const CLICK_GOLD = 'CLICK_GOLD';
const IGNORE_GOLD = 'IGNORE_GOLD';
const IGNORE_EXP = 'IGNORE_EXP';
const CLICK_CONTENT = 'CLICK_CONTENT';
const PLAYTIME_RESET = 'PLAYTIME_RESET';

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
        case PLAYTIME_RESET:
            console.log('리듀서 도착(PLAYTIME_RESET)')
            return {
                ...state,
                playTime: null
            }
        case CLICK_CONTENT:
            console.log('리듀서 도착(CLICK_CONTENT)')
            let tempNum = 0
            switch(action.payload) {
                case 1:
                    tempNum = 1800
                    break;
                case 2:
                    tempNum = 1800
                    break;
                case 3:
                    tempNum = 4500
                    break;
                default :
                    tempNum = 2000
            }
            console.log('tempNum은? ',tempNum)
            return {
                ...state,
                playTime: tempNum
            }
        default: {
            return state;
        }
    }
};

export default market;
