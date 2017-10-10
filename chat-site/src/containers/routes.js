import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MainWindow from './MainWindow';

const routes = (
  <Router history={browserHistory}>
    <Route name="home" path="/" component={MainWindow} />

  </Router>
);

export default routes;
