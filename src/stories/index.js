import React, {Fragment} from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo'
import reducer from "../reducers"
import middleware from "../middleware"
import {Provider} from 'react-redux'
import LoginPage from "../components/LoginPage";
import {createStore} from "redux";
import NavigationBar from "../components/NavigationBar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from "../components/HomePage";

import '../index.css'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
        </Button>
    ));


const store = createStore(reducer, middleware)

storiesOf('Login Page', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', () => (
        <LoginPage/>
    ))

storiesOf('Navigation Bar', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', () => (
        <Router>
            <Fragment>
                <NavigationBar/>
                <Route path='/' exact component={HomePage}/>
            </Fragment>
        </Router>
    ))



