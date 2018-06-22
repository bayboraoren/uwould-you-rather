import React, {Component} from 'react';
import {connect} from "react-redux";
import {toMap} from "../utils/helpers";
import QuestionWidget from "./QuestionWidget";
import {filterQuestion} from "../actions/filter-question-action";
import {CardPanel, Row} from "react-materialize";

class QuestionListWidget extends Component {

    render() {

        const {questions, isQuestionFiltered,filterQuestion} = this.props

        return (

            <CardPanel>

                <div>
                    <input
                        id="filterId"
                        type="checkbox"
                        className="filled-in"
                        checked={isQuestionFiltered}
                        onChange={(e)=>{filterQuestion(e.target.checked)}}
                    />
                    <label htmlFor={'filterId'}>
                        Unanswered Questions
                    </label>


                </div>

                <Row>
                    {
                        questions.filter((question) => {
                            if (isQuestionFiltered) {
                                return question.optionOne.votes.length === 0 && question.optionTwo.votes.length === 0
                            } else {
                                return question.optionOne.votes.length !== 0 || question.optionTwo.votes.length !== 0
                            }
                        }).map((question) =>
                            <QuestionWidget key={question.id} id={question.id}/>
                        )
                    }
                </Row>

            </CardPanel>
        )
    }
}


function mapStateToProps({questions, userLogged, filterQuestion}) {
    return {
        userLogged,
        questions: toMap(questions),
        isQuestionFiltered: filterQuestion
    }
}

export default connect(mapStateToProps,{filterQuestion})(QuestionListWidget)

