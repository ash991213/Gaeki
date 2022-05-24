const initialState = {
    loginRes:[]
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface actionType {
    type: String;
    payload: {
    };
}

const login = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginRes: action.payload,
            };

        default: {
            return state;
        }
    }
};

export default login;
