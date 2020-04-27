import { combineReducers } from "redux";
import ClientReducer from "../actions and reducers/ClientReducer";
import InstructorReducers from "../actions and reducers/InstructorReducers";

export default combineReducers({
    ClientReducer,
    InstructorReducers,
})