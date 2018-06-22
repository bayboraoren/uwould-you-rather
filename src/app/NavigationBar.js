import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {Navbar} from "react-materialize";

class NavigationBar extends Component {

    render() {

        const {userLogged} = this.props

        if (userLogged.id === undefined) {
            return <Redirect to='/login'/>
        }

        return (
            <div>
                <Navbar brand='...WOULD YOU RATHER ?' right>
                    <ul>
                        <li>
                            <NavLink to='/' exact>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/leader-board' activeClassName='active'>
                                Leader Board
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/add' activeClassName='active'>
                                New Poll
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' activeClassName='active'>
                                <img src={"../assets/" + userLogged.avatarURL} style={{marginTop: 10}} width={40}/>
                            </NavLink>
                        </li>
                    </ul>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps({userLogged}) {
    return {
        userLogged: userLogged,
    }
}

export default withRouter(connect(mapStateToProps)(NavigationBar))
