import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authDate = {
            email: email,
            password, password,
            returnSecureToken: true
        }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCDxcPI23T0KVaW2zqGzKXh_mQkO-HC_08', authDate)
            .then(response => {
                console.log(response)
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
                dispatch(authFailed(error));
            })
    }
};