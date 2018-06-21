import React, {Component} from 'react'
import {connect} from "react-redux";
import {handleSaveQuestionAnswer, saveQuestionAnswer} from "../actions/question-action";
import {handleInitialData} from "../actions/shared-action";
import {withRouter} from "react-router";
import {saveClear} from "../actions/save-success-action";
import {updateLoggedUser} from "../actions/user-logged-action";
import {Badge, CardPanel, Col, Collection, CollectionItem, Row} from "react-materialize";
import {Legend, PieChart} from 'react-easy-chart'

class QuestionDetailWidget extends Component {

    handleClick = (e, answer) => {
        e.preventDefault()
        if (this.props.userLogged.answers[this.props.id] === undefined) {
            this.props.dispatch(handleSaveQuestionAnswer(this.props.id, answer))
            this.props.dispatch(updateLoggedUser(this.props.userLogged, this.props.id, answer))
        } else {
            alert("You voted before, you can not vote again...")
        }
    }

    render() {

        const {question, users, saveSuccess} = this.props
        const author = users[question.author]
        const optionOneVotesLength = question.optionOne.votes.length
        const optionTwoVotesLength = question.optionTwo.votes.length
        const votesTotalLength = optionOneVotesLength + optionTwoVotesLength
        const answered = optionOneVotesLength + optionTwoVotesLength > 0


        const pieData = [
            {key: question.optionOne.text, value: optionOneVotesLength},
            {key: question.optionTwo.text, value: optionTwoVotesLength}
        ]

        if (saveSuccess === true) {
            alert("Question Voted Successfully, thank you...")
            this.props.dispatch(handleInitialData())
            this.props.dispatch(saveClear())
            this.props.history.push("/");
        }

        return (
            <div>
                <Row>
                    <Col s={4} className='grid-example'>
                        <CardPanel className="">
                            <div className="section">
                                <h5><img src={"/assets/" + author.avatarURL} width={100}/></h5>
                                <h5>ASKED BY {author.name}</h5>
                            </div>

                            <Collection>
                                <CollectionItem href="#!"
                                                onClick={(e) => this.handleClick(e, 'optionOne')}>{question.optionOne.text}
                                    {answered === true && <Badge>{optionOneVotesLength} voted</Badge>}
                                </CollectionItem>
                                <CollectionItem href="#!"
                                                onClick={(e) => this.handleClick(e, 'optionTwo')}>{question.optionTwo.text}
                                    {answered === true && <Badge>{optionTwoVotesLength} voted</Badge>}
                                </CollectionItem>
                            </Collection>

                            <div className="divider"></div>

                            <div>
                                <h6>
                                    {answered === true &&
                                    <div>
                                        <PieChart
                                            size={250}
                                            labels
                                            data={pieData}
                                        />
                                        <Legend data={pieData} dataId={'key'}/>
                                    </div>}

                                </h6>
                            </div>
                        </CardPanel>
                    </Col>
                </Row>
            </div>
        )
    }

}

function mapStateToProps({userLogged, questions, users, saveSuccess}, {id}) {
    const question = questions[id]

    return {
        id,
        question,
        users,
        userLogged,
        saveSuccess,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionDetailWidget))