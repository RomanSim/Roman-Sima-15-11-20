import * as actionTypes from './mailBox-types';

const INITIAL_STATE = {
    receivedMessages: [], //user id, title, description
    sentMessages: [], // user id, title, description
    users: [] //user id, maybe name
};

const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE_RECEIVED:
            return {}
        case actionTypes.ADD_MESSAGE_SENT:
            return { ...state, sentMessages: [...state.sentMessages, action.payload] }
        case actionTypes.REMOVE_MESSAGE_RECEIVED:
            return {}
        case actionTypes.USERS:
            return {}
        default:
            return state;
    }
};

export default messageReducer;