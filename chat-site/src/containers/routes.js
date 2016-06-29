import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MainWindow from './MainWindow';

const routes =  (
    <Router history={hashHistory}>
        <Route name="home" path="/" component={MainWindow}></Route>

    </Router>  
);

export default routes;
