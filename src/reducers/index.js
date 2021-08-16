import { combineReducers } from "redux";
import userReducer from './userReducer';

const rootReducer = combineReducers({
    userState: userReducer,
    // articleState: articleReducer,
});

export default rootReducer;