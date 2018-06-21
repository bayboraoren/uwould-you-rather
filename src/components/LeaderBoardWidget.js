import React, {Component} from "react";
import {getObjectLength} from "../utils/helpers";
import {Card, CardTitle, Col, Row} from "react-materialize";

class LeaderBoardWidget extends Component {
    render() {

        const {user} = this.props

        return (
            <div>
                <Row>
                    <Col m={7} s={12}>
                        <Card horizontal
                              header={
                                  <div>
                                      <CardTitle
                                          image={"assets/" + user.avatarURL} style={{display: 'contents'}}>
                                      </CardTitle>
                                      <span style={{textAlign:'center',display:'block',fontWeight:'bold'}}>{user.name}</span>

                                  </div>}
                              actions={[<div># OF TOTAL {user.questions.length + getObjectLength(user.answers)}</div>]}>

                            <p>
                                <div>QUESTION ASKED
                                    <span className="new badge blue"
                                          data-badge-caption="asked">{getObjectLength(user.questions)}
                                          </span>
                                </div>
                                <br/>
                                <div>QUESTION ANSWERED
                                    <span className="new badge #26a69a"
                                          data-badge-caption="voted">{getObjectLength(user.answers)}
                                          </span>
                                </div>
                            </p>

                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LeaderBoardWidget

