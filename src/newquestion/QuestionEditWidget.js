import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Button, CardPanel, Col, Row} from "react-materialize";
import {handleNewQuestion} from "./newQuestionAction";
import {handleInitialData} from "../app/AppAction";

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

        const {optionOneText, optionTwoText} = this.state
        const {dispatch} = this.props

        dispatch(handleNewQuestion(optionOneText, optionTwoText))
        dispatch(handleInitialData())
        this.props.history.push("/")

    }

    render() {
        return (
            <div>
                <CardPanel>
                    <Row>
                        <b>WOULD YOU RATHER ?</b>
                    </Row>
                    <Row>
                        <textarea placeholder={'OPTION ONE'} onChange={this.handleChangeOptionOne}/>
                    </Row>
                    <Row>
                        <textarea placeholder={'OPTION TWO'} onChange={this.handleChangeOptionTwo}/>
                    </Row>
                    <Row>
                        <Button onClick={this.handleSave}>Save</Button>
                    </Row>
                </CardPanel>
            </div>
        )
    }
}

export default withRouter(connect()(QuestionEditWidget))
