import React, {Component} from 'react';
import LeaderBoardWidget from "./LeaderBoardWidget";
import {connect} from "react-redux";
import {getObjectLength, toMap} from "../utils/helpers";
import {handleInitialData} from "../actions/shared-action";

class LeaderBoardListWidget extends Component {

    componentDidMount() {
        this.props.handleInitialData()
    }

    render() {

        const {users} = this.props

        return (
            <div>

                {users.sort((userA, userB) => {

                    const userATotal = userA.questions.length + getObjectLength(userA.answers)
                    const userBTotal = userB.questions.length + getObjectLength(userB.answers)

                    return  userATotal <= userBTotal

                }).map((user) =>
                    <LeaderBoardWidget  key={user.id} user={user}/>
                )}

            </div>
        )
    }
}


function mapStateToProps({users, userLogged}) {
    return {
        users: toMap(users),
        userLogged: userLogged
    }
}

export default connect(mapStateToProps,{handleInitialData})(LeaderBoardListWidget)

