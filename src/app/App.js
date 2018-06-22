import React, {Component} from 'react';
import '../App.css';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from "../home/HomePage";
import LoginPage from "../login/LoginPage";
import LeaderBoardPage from "../leaderboard/LeaderBoardPage";
import NewQuestionPage from "../newquestion/NewQuestionPage";
import QuestionDetailPage from "../questiondetail/QuestionDetailPage";
import {Switch} from "react-router";
import Page404 from "./Page404";

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/leader-board' component={LeaderBoardPage}/>
                        <Route path='/add' component={NewQuestionPage}/>
                        <Route path='/questions/:id' component={QuestionDetailPage}/>
                        <Route component={Page404}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

function mapStateToProps({userLogged}) {
    return {
        userLogged: userLogged,
    }
}

export default connect(mapStateToProps)(App)
