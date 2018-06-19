import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import QuestionEditWidget from "./QuestionEditWidget";

class NewQuestionPage extends  Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <QuestionEditWidget/>
            </div>
        )
    }
}

export default NewQuestionPage

