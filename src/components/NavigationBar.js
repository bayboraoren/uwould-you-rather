import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Icon, Navbar, NavItem} from "react-materialize";

class NavigationBar extends Component {

    render() {

        const {userLogged} = this.props

        if (userLogged.id === undefined) {
            return <Redirect to='/login'/>
        }


        return (
            <Navbar brand='Would You Rather' right>
                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                <NavItem href='get-started.html'><img style={{marginTop:10}} src={"assets/" + userLogged.avatarURL} height={40}/></NavItem>
            </Navbar>
        )
    }

}

function mapStateToProps({userLogged}) {
    return {
        userLogged: userLogged,
    }
}

export default connect(mapStateToProps)(NavigationBar)
