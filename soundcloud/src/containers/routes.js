import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Main from '../containers/Main'

const routes =  (
    <Router history={hashHistory}>
        <Route name="home" path="/" component={Main}>
        </Route>

    </Router>  
);

export default routes;
