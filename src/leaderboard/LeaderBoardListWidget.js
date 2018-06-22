import React, {Component} from 'react';
import LeaderBoardWidget from "./LeaderBoardWidget";
import {connect} from "react-redux";
import {getObjectLength, toMap} from "../utils/helpers";
import {handleInitialData} from "../app/AppAction";

class LeaderBoardListWidget extends Component {

    componentDidMount() {
        this.props.handleInitialData()
    }

    render() {

        const {userList} = this.props

        return (
            <div>

                {userList.sort((userA, userB) => {

                    const userATotal = userA.questionList.length + getObjectLength(userA.answers)
                    const userBTotal = userB.questionList.length + getObjectLength(userB.answers)

                    return  userATotal <= userBTotal

                }).map((user) =>
                    <LeaderBoardWidget  key={user.id} user={user}/>
                )}

            </div>
        )
    }
}


function mapStateToProps({userList, userLogged}) {
    return {
        userList: toMap(userList),
        userLogged: userLogged
    }
}

export default connect(mapStateToProps,{handleInitialData})(LeaderBoardListWidget)

