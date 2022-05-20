const initialState = {
    ranking: {},
    usersRanking: [],
    stageList: [1, 2, 3, 4, 5],
};

const RANKING_LIST_REQUEST = 'RANKING_LIST_REQUEST';
const RANKING_LIST_SUCCESS = 'RANKING_LIST_SUCCESS';
const RANKING_LIST_FAILURE = 'RANKING_LIST_FAILURE';
// const ON_STAGE_REQUEST = 'ON_STAGE_REQUEST';
// const ON_STAGE_SUCCESS = 'ON_STAGE_SUCCESS';
// const ON_STAGE_FAILURE = 'ON_STAGE_FAILURE';

interface actionType {
    type: String;
    payload: {
        list: [];
    };
}

const ranking = (state = initialState, action: any) => {
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
        // case ON_STAGE_REQUEST:
        //     return {
        //         ...state,
        //     };
        // case ON_STAGE_SUCCESS:
        //     return {
        //         ...state,
        //         stage: action.payload,
        //     };
        // case ON_STAGE_FAILURE:
        //     return {
        //         ...state,
        //     };
        default: {
            return state;
        }
    }
};

export default ranking;
