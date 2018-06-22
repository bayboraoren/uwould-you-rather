import {combineReducers} from "redux";
import userLoggedReducer from '../login/loginReducer'
import filterQuestionReducer from '../questionlist/isQuestionFilteredReducer'
import questionListReducer from "../questionlist/questionListReducer";
import newQuestionReducer from "../newquestion/newQuestionReducer";
import userListReducer from "../userlist/userListReducer";
import questionSavedSuccessfullyReducer from "../newquestion/questionSavedSuccessfullyReducer";

export default combineReducers({
    userList: userListReducer,
    userLogged:userLoggedReducer,
    questionList:questionListReducer,
    newQuestion:newQuestionReducer,
    filterQuestion:filterQuestionReducer,
    saveSuccess:questionSavedSuccessfullyReducer,
})
