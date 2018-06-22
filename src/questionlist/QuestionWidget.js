import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {CardPanel, Col, Row} from "react-materialize";

class QuestionWidget extends Component {
    render() {

        const {id, question} = this.props

        return (
            <Col s={4} className='grid-example'>
                <CardPanel className="">
                    <Link to={`/questions/${id}`} className='tweet'>
                        <div className="section">
                            <h5>WOULD YOU RATHER ?</h5>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6>{question.optionOne.text}</h6>
                        </div>
                        <div className="divider"></div>
                        <div className="section">
                            <h6>{question.optionTwo.text}</h6>
                        </div>
                    </Link>
                </CardPanel>
            </Col>
        )
    }
}


function mapStateToProps({userLogged, questionList}, {id}) {
    const question = questionList[id]

    return {
        userLogged,
        question,
    }
}

export default withRouter(connect(mapStateToProps)(QuestionWidget))