import React, {Component} from 'react';
import {connect} from "react-redux";
import {toMap} from "../utils/helpers";
import QuestionWidget from "./QuestionWidget";
import {filterQuestion} from "../actions/filter-question-action";
import {CardPanel, Col, Row} from "react-materialize";

class QuestionListWidget extends Component {


    handleFilter = (e) => {
        this.props.dispatch(filterQuestion(e.target.checked))
    }


    render() {

        const {questions, filterQuestion} = this.props

        return (

            <CardPanel>

                <div>
                    <input
                        id="filterId"
                        type="checkbox"
                        checked={filterQuestion}
                        onChange={this.handleFilter}
                    />
                    <label htmlFor={'filterId'}>
                        Unanswered Questions
                    </label>


                </div>

                <Row>
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
                </Row>

            </CardPanel>
        )
    }
}


function mapStateToProps({questions, userLogged, filterQuestion}) {
    return {
        userLogged,
        questions: toMap(questions),
        filterQuestion: filterQuestion
    }
}

export default connect(mapStateToProps)(QuestionListWidget)

