import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from "../actions/shared-action";
import {connect} from "react-redux";
import {setLoggedUser} from "../actions/user-logged-action";
import {withRouter} from "react-router";
import {toMap} from "../utils/helpers";

class LoginPage extends Component {


    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }


    setLoggedUser = (user) => {
        this.props.dispatch(setLoggedUser(user))
        this.props.history.push("/");
    }

    render() {

        const {users} = this.props

        return (
            <div id={'app'}>
                LOGIN
                <ul>
                    {users.map((user) => (
                        <li key={user.id} onClick={() => this.setLoggedUser(user)}>{user.name}</li>
                    ))}
                </ul>
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

export default withRouter(connect(mapStateToProps)(LoginPage))
