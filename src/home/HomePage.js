import React, {Component} from 'react';
import {connect} from "react-redux";
import NavigationBar from "../app/NavigationBar";
import QuestionListWidget from "../questionlist/QuestionListWidget";

class HomePage extends Component {

    render() {

        return (
            <div>
                <NavigationBar/>
                <QuestionListWidget/>
            </div>
        )
    }

}

function mapStateToProps({userLogged}) {
    return {
        userLogged,
    }
}

export default connect(mapStateToProps)(HomePage)
