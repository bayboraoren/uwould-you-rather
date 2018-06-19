import React, {Component} from 'react';
import {connect} from "react-redux";
import {toMap} from "../utils/helpers";
import QuestionWidget from "./QuestionWidget";
import {filterQuestion} from "../actions/filter-question-action";

class QuestionListWidget extends Component {


    handleFilter = (e) => {
        this.props.dispatch(filterQuestion(e.target.checked))
    }


    render() {

        const {questions,filterQuestion} = this.props

        return (
            <div>
                <div><input type="checkbox" checked={filterQuestion} onChange={this.handleFilter} />unanswered
                    polls
                </div>
                {
                    questions.filter((question) => {
                        if (filterQuestion) {
                            return question.optionOne.votes.length === 0 && question.optionTwo.votes.length === 0
                        } else {
                            return question.optionOne.votes.length !== 0 || question.optionTwo.votes.length !== 0
                        }
                    }).map((question) =>
                        <QuestionWidget key={question.id} id={question.id}/>
                    )
                }

            </div>
        )
    }
}


function mapStateToProps({questions, userLogged,filterQuestion}) {
    return {
        userLogged,
        questions: toMap(questions),
        filterQuestion:filterQuestion
    }
}

export default connect(mapStateToProps)(QuestionListWidget)

