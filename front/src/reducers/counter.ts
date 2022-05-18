interface countType {
    number: number;
    loadding: boolean;
    errors: null | string;
}

const initialState: countType = {
    number: 0,
    loadding: false,
    errors: null,
};

const PLUS_CLICK_REQUEST = 'PLUS_CLICK_REQUEST';
const PLUS_CLICK_SUCCESS = 'PLUS_CLICK_SUCCESS';
const PLUS_CLICK_FAILED = 'PLUS_CLICK_FAILED';
const MINUS_CLICK_REQUEST = 'MINUS_CLICK_REQUEST';
const MINUS_CLICK_SUCCESS = 'MINUS_CLICK_SUCCESS';
const MINUS_CLICK_FAILED = 'MINUS_CLICK_FAILED';
const COUNTING_NUMBER_REQUEST = 'COUNTING_NUMBER_REQUEST';
const COUNTING_NUMBER_SUCCESS = 'COUNTING_NUMBER_SUCCESS';
const COUNTING_NUMBER_FAILED = 'COUNTING_NUMBER_FAILED';

const counter = (state = initialState, action: any) => {
    switch (action.type) {
        case PLUS_CLICK_REQUEST:
            return {
                ...state,
            };
        case PLUS_CLICK_SUCCESS:
            return {
                ...state,
                number: state.number + 1,
            };
        case PLUS_CLICK_FAILED:
            return {
                ...state,
            };
        case MINUS_CLICK_REQUEST:
            return {
                ...state,
            };
        case MINUS_CLICK_SUCCESS:
            return {
                ...state,
                number: state.number - 1,
            };
        case MINUS_CLICK_FAILED:
            return {
                ...state,
            };
        case COUNTING_NUMBER_REQUEST:
            return {
                ...state,
            };
        case COUNTING_NUMBER_SUCCESS:
            return {
                ...state,
                number: action.action,
            };
        case COUNTING_NUMBER_FAILED:
            return {
                ...state,
            };
        default: {
            return state;
        }
    }
};

export default counter;
