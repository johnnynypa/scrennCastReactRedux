import React from 'react';
import {Route, indexRoute} from 'react-router';
import App from './components/App';
import Greetings from './components/greetings'
import SignUpPage from './components/signup/signUpPage';


export default (
    <Route path="/" component={App}>
        <indexRoute component={Greetings} />
        <Route path="signup" component={SignUpPage} />
    </Route>
)