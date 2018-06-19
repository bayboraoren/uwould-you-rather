import usersReducer from './users-reducer'
import {combineReducers} from "redux";
import userLoggedReducer from "./user-logged-reducer";
import questionsReducer from "./questions-reducer";
import filterQuestionReducer from "./filter-question-reducer";
import saveSuccessReducer from "./save-success-reducer";

export default combineReducers({
    users: usersReducer,
    userLogged:userLoggedReducer,
    questions:questionsReducer,
    filterQuestion:filterQuestionReducer,
    saveSuccess:saveSuccessReducer,
})
