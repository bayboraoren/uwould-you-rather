import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class QuestionWidget extends Component {
    render() {

        const {id,question} = this.props

        return (
            <Link to={`/questions/${id}`} className='tweet'>
                <div><b>WOULD YOU RATHER ?</b></div>
                <div>{question.optionOne.text}</div>
                <div>{question.optionTwo.text}</div>
            </Link>
        )
    }
}


function mapStateToProps ({userLogged, users, questions}, { id }) {
    const question = questions[id]

    return {
        userLogged,
        question,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionWidget))