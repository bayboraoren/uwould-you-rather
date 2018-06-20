import React, {Component} from 'react'
import {connect} from "react-redux";
import {handleSaveQuestionAnswer, saveQuestionAnswer} from "../actions/question-action";
import {handleInitialData} from "../actions/shared-action";
import {withRouter} from "react-router";
import {saveClear} from "../actions/save-success-action";
import {updateLoggedUser} from "../actions/user-logged-action";

class QuestionDetailWidget extends Component {

    handleClick = (e,answer) => {
        e.preventDefault()
        if(this.props.userLogged.answers[this.props.id]===undefined) {
            this.props.dispatch(handleSaveQuestionAnswer(this.props.id, answer))
            this.props.dispatch(updateLoggedUser(this.props.userLogged,this.props.id,answer))
        }else{
            alert("You voted before, you can not vote again...")
        }
    }

    render() {

        const {question, users,saveSuccess} = this.props
        const author = users[question.author]
        const optionOneVotesLength = question.optionOne.votes.length
        const optionTwoVotesLength = question.optionTwo.votes.length
        const votesTotalLength = optionOneVotesLength + optionTwoVotesLength
        const answered = optionOneVotesLength + optionTwoVotesLength > 0

        if (saveSuccess===true) {
            alert("Question Voted Successfully, thank you...")
            this.props.dispatch(handleInitialData())
            this.props.dispatch(saveClear())
            this.props.history.push("/");
        }


        return (
            <div>
                <div><img src={author.avatarURL} width={100}/></div>
                <br/>
                <div>{author.id}</div>
                <br/>
                <div onClick={(e) => this.handleClick(e, 'optionOne')}>{question.optionOne.text}</div>
                {answered === true && <div><span># of voted {optionOneVotesLength}</span><br/></div>}
                <br/>
                <div onClick={(e) => this.handleClick(e, 'optionTwo')}>{question.optionTwo.text}</div>
                {answered === true && <div><span># of voted {optionTwoVotesLength}</span><br/></div>}
                {answered === true && <div>
                    <br/><span>Total vote {votesTotalLength} for option one : {optionOneVotesLength} and option two : {optionTwoVotesLength}</span><br/>
                </div>}
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