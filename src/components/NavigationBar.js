import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux";
import {Redirect} from "react-router";

class NavigationBar extends Component {

    render() {

        const {userLogged} = this.props

        if (userLogged.id === undefined) {
            return <Redirect to='/login'/>
        }


        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        |
                    </li>
                    <li>
                        <NavLink to='/leader-board' activeClassName='active'>
                            Leader Board |
                        </NavLink>
                    </li>
                    <li>
                        |
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Poll
                        </NavLink>
                    </li>
                    <li>
                        <img src={userLogged.avatarURL} width={40}/>
                        <span>{userLogged.id}</span>
                    </li>
                </ul>
            </nav>
        )
    }

}

function mapStateToProps({userLogged}) {
    return {
        userLogged: userLogged,
    }
}

export default connect(mapStateToProps)(NavigationBar)
