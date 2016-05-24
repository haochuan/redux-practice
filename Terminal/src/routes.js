import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Terminal from './containers/Terminal';

const routes =  (
    <Router history={browserHistory}>
        <Route name="home" path="/" component={Terminal}></Route>
    </Router>  
);

export default routes;
