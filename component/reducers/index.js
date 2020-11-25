import { combineReducers } from 'redux';
// import receivedReducer from './MailboxData';
import receivedReducer from './mailBox/mailBox-reducers';

// const allReducers = combineReducers({
//     messages: receivedReducer
// });

// export default allReducers;
const allReducers = combineReducers({
    messages: receivedReducer
});

export default allReducers;