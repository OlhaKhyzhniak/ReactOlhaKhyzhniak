import {combineReducers} from "redux";
import { usersReducer, userReducer } from "./reducers";


export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer
});