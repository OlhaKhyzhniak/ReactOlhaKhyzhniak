import {combineReducers} from "redux";
import { usersReducer, userReducer, accordionReducer } from "./reducers";


export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    accordion: accordionReducer
});