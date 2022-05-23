const initialState = {
    ranking: {},
    usersRanking: [],
    stageList: [1, 2, 3, 4, 5],
    isShowing: false,
};
const RANKING_LIST_REQUEST = 'RANKING_LIST_REQUEST';
const RANKING_LIST_SUCCESS = 'RANKING_LIST_SUCCESS';
const RANKING_LIST_FAILURE = 'RANKING_LIST_FAILURE';
const OPEN_RANKING_REQUEST = 'OPEN_RANKING_REQUEST';
const OPEN_RANKING_SUCCESS = 'OPEN_RANKING_SUCCESS';
const OPEN_RANKING_FAILURE = 'OPEN_RANKING_FAILURE';
const CLOSE_RANKING_REQUEST = 'CLOSE_RANKING_REQUEST';
const CLOSE_RANKING_SUCCESS = 'CLOSE_RANKING_SUCCESS';
const CLOSE_RANKING_FAILURE = 'CLOSE_RANKING_FAILURE';

interface actionType {
    type: String;
    payload: {
        list: [];
    };
}

const ranking = (state = initialState, action: actionType) => {
    switch (action.type) {
        case RANKING_LIST_REQUEST:
            return {
                ...state,
            };
        case RANKING_LIST_SUCCESS:
            return {
                ...state,
                usersRanking: action.payload,
            };
        case RANKING_LIST_FAILURE:
            return {
                ...state,
            };
        case OPEN_RANKING_REQUEST:
            return {
                ...state,
            };
        case OPEN_RANKING_SUCCESS:
            return {
                ...state,
                isShowing: true,
            };
        case OPEN_RANKING_FAILURE:
            return {
                ...state,
            };
        case CLOSE_RANKING_REQUEST:
            return {
                ...state,
            };
        case CLOSE_RANKING_SUCCESS:
            return {
                ...state,
                isShowing: false,
            };
        case CLOSE_RANKING_FAILURE:
            return {
                ...state,
            };
        default: {
            return state;
        }
    }
};

export default ranking;
