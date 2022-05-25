const initialState = {
    userid: '',
    nickname: '',
    stage: 1,
    gold: 0,
    exp: 0,
};

const INFO_REQUEST = 'INFO_REQUEST';
const INFO_SUCCESS = 'INFO_SUCCESS';
const INFO_FAILURE = 'INFO_FAILURE';
const GOLD_CLICK_REQUEST = 'GOLD_CLICK_REQUEST';
const GOLD_CLICK_SUCCESS = 'GOLD_CLICK_SUCCESS';
const GOLD_CLICK_FAILURE = 'GOLD_CLICK_FAILURE';

interface actionType {
    type: string;
    payload: {
        userid: string;
        nickname: string;
        stage: number;
        gold: 0;
        exp: 0;
    };
}

const info = (state = initialState, action: actionType) => {
    switch (action.type) {
        case INFO_REQUEST:
            return {
                ...state,
                asdf: '요청~',
            };
        case INFO_SUCCESS:
            const { userid, nickname, stage, gold, exp } = action.payload;

            return {
                ...state,
                asdf: '성공~',
                userid,
                nickname,
                stage,
                gold,
                exp,
            };
        case INFO_FAILURE:
            return {
                ...state,
                asdf: '실패~',
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
        default: {
            return state;
        }
    }
};

export default info;
