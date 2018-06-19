import React, {Component, Fragment} from 'react';
import '../App.css';
import {connect} from "react-redux";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import LeaderBoardPage from "./LeaderBoardPage";
import NewQuestionPage from "./NewQuestionPage";
import QuestionDetailPage from "./QuestionDetailPage";

class App extends Component {


    render() {

        return (
            <div id={'app'}>
                <Router>
                    <Fragment>
                        <Route path='/' exact={true} component={HomePage}/>
                        <Route path='/login' exact={true} component={LoginPage}/>
                        <Route path='/leader-board' exact={true} component={LeaderBoardPage}/>
                        <Route path='/add' exact={true} component={NewQuestionPage}/>
                        <Route path='/questions/:id' component={QuestionDetailPage}/>
                    </Fragment>
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
