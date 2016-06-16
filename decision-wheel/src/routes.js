import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Root from './containers/Root';
import Counter from './containers/Counter';

const routes =  (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <Route path="test" component={Counter} />
        </Route>
    </Router>  
);

export default routes;
