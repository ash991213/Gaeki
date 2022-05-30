const initialState = {
    ranking: {},
    usersRanking: [],
    myranking: {},
    stageList: [1, 2, 3, 4, 5],
};
const RANKING_LIST_REQUEST = 'RANKING_LIST_REQUEST';
const RANKING_LIST_SUCCESS = 'RANKING_LIST_SUCCESS';
const RANKING_LIST_FAILURE = 'RANKING_LIST_FAILURE';
const MY_RANKING_REQUEST = 'MY_RANKING_REQUEST';
const MY_RANKING_SUCCESS = 'MY_RANKING_SUCCESS';
const MY_RANKING_FAILURE = 'MY_RANKING_FAILURE';

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
        case MY_RANKING_REQUEST:
            return {
                ...state,
            };
        case MY_RANKING_SUCCESS:
            return {
                ...state,
                myranking: action.payload,
            };
        case MY_RANKING_FAILURE:
            return {
                ...state,
            };
        default: {
            return state;
        }
    }
};

export default ranking;
