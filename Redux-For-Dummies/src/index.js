import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import Home from './containers/Home';

// const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(counter);
const store = configureStore(window.__INITIAL_STATE__);
const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    rootEl  
  );
}

render();
