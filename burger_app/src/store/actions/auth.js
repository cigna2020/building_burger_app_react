import axios from 'axios';

import * as actionsTypes from './actionsTypes';


export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START,
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionsTypes.AUTH_FAIL,
        error: error,
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxo0n47yEdX1Jq96tEpHFd2GslTJLCcDo', authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
    };
};