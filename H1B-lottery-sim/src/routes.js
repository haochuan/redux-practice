import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Lottery from './containers/Lottery';

const routes =  (
    <Router history={browserHistory}>
        <Route name="home" path="/" component={Lottery}></Route>
    </Router>  
);

export default routes;
