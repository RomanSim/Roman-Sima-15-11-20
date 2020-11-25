
/*
* action creators
*/
import * as types from './mailBox-types'

export const receiveMessage = (messages) => {
    return {
        type: types.ADD_MESSAGE_RECEIVED,
        payload: {
            message: messages,
        },
    };
};

export const sentMessage = (messages) => {
    return {
        type: types.ADD_MESSAGE_SENT,
        payload: {
            message: messages,
        },
    };
};

export const removeMessageReceived = (messages) => {
    return {
        type: types.REMOVE_MESSAGE_RECEIVED,
        payload: {
            message: messages,
        },
    };
};

export const user = (messages) => {
    return {
        type: types.USERS,
        payload: {
            id: messages.userID,
        },
    };
};
