import React, {Component} from 'react';
import {connect} from "react-redux";
import {toMap} from "../utils/helpers";
import QuestionWidget from "./QuestionWidget";
import {filterQuestion} from "./isQuestionFilteredAction";
import {CardPanel, Row} from "react-materialize";

class QuestionListWidget extends Component {

    render() {

        const {questionList, isQuestionFiltered,filterQuestion} = this.props

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
                        questionList.filter((question) => {
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


function mapStateToProps({questionList, userLogged, filterQuestion}) {
    return {
        userLogged,
        questionList: toMap(questionList),
        isQuestionFiltered: filterQuestion
    }
}

export default connect(mapStateToProps,{filterQuestion})(QuestionListWidget)

