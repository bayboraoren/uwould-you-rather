import React, {Component} from 'react';
import {getObjectLength} from "../utils/helpers";

class LeaderBoardWidget extends  Component{
    render(){

        const {user} = this.props

        return(
            <div>
                <div><img src={user.avatarURL} width={100}/></div>
                <br/>
                <div>{user.id}</div>
                <br/>
                <div># OF QUESTION ASKED {user.questions.length}</div>
                <br/>
                <div># OF QUESTION ANSWERED {getObjectLength(user.answers)}</div>
                <br/>
                <div># OF TOTAL {user.questions.length + getObjectLength(user.answers)}</div>
            </div>
        )
    }
}

export default LeaderBoardWidget

