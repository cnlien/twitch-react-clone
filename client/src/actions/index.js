import {SIGN_IN, SIGN_OUT} from '../actions/types';

export const signIn= (UserId) => {
    return {
        type: SIGN_IN,
        payload: UserId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
        payload: null
    };
};