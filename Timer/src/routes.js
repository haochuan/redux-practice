import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Timer from './containers/Timer';

const routes =  (
    <Router history={hashHistory}>
        <Route name="home" path="/" component={Timer}></Route>
    </Router>  
);

export default routes;
