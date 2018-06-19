import React, {Component} from 'react'
import {connect} from "react-redux";
import QuestionDetailWidget from "./QuestionDetailWidget";
import NavigationBar from "./NavigationBar";

class QuestionDetailPage extends Component {
    render() {

        const {id} = this.props

        return (
            <div>
                <NavigationBar/>
                <QuestionDetailWidget id={id}/>
            </div>
        )
    }
}

function mapStateToProps({userLogged, questions, users}, props) {
    const {id} = props.match.params

    return {
        id,
    }
}

export default connect(mapStateToProps)(QuestionDetailPage)