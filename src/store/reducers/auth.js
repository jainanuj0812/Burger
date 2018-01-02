import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

export const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

export const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

export const authFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

export const authExpired = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
            break;
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
            break;
        case actionTypes.AUTH_FAILED:
            return authFailed(state, action);
            break;
        case actionTypes.AUTH_EXPIRED:
            return authExpired(state, action);
            break;
        default:
            return state;
    }
};

export default reducer;

