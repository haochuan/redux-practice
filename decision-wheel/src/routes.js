import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Root from './containers/Root';
import Counter from './containers/Counter';
import Timer from './containers/Timer';

const routes =  (
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <Route path="counter"  component={Counter} />
            <Route path="timer" component={Timer} />
        </Route>
    </Router>  
);

export default routes;
