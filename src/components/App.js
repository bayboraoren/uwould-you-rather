import React, {Component, Fragment} from 'react';
import '../App.css';
import {connect} from "react-redux";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import LeaderBoardPage from "./LeaderBoardPage";
import NewQuestionPage from "./NewQuestionPage";
import QuestionDetailPage from "./QuestionDetailPage";
import {Switch} from "react-router";
import Page404 from "./Page404";

class App extends Component {

    render() {
        return (
            <div id={'app'}>
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
