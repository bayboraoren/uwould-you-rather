import {Component} from "react";
import NavigationBar from "../app/NavigationBar";
import React from "react";
import {connect} from "react-redux";
import LeaderBoardListWidget from "./LeaderBoardListWidget";


class LeaderBoardPage extends Component {
    render(){
        return (
            <div>
                <NavigationBar/>
                <LeaderBoardListWidget/>
            </div>
        )

    }
}

function mapStateToProps() {
    return {
    }
}

export default connect(mapStateToProps)(LeaderBoardPage)