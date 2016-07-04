import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes';

// import 'normalize.css';

const Root = ({ store }) => (
    <Provider store={store}>
        { routes }
    </Provider>
);

export default Root;
