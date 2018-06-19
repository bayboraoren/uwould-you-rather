import React, {Component} from 'react';
import {handleSaveQuestion} from "../actions/question-action";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class QuestionEditWidget extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }


    handleChangeOptionOne = (e) => {
        const optionOneText = e.target.value

        this.setState(() => ({
            optionOneText
        }))
    }

    handleChangeOptionTwo = (e) => {
        const optionTwoText = e.target.value

        this.setState(() => ({
            optionTwoText
        }))
    }

    handleSave = (e) => {

        e.preventDefault()

        const { optionOneText,optionTwoText } = this.state
        const { dispatch } = this.props

        dispatch(handleSaveQuestion(optionOneText, optionTwoText))
        this.props.history.push("/");

    }

    render() {
        return (
            <div>
                <b>WOULD YOU RATHER ?</b>
                <br/>
                <textarea placeholder={'OPTION ONE'} onChange={this.handleChangeOptionOne}/>
                <br/>
                <textarea placeholder={'OPTION TWO'} onChange={this.handleChangeOptionTwo}/>
                <br/>
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}

export default withRouter(connect()(QuestionEditWidget))
