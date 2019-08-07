import '../scss/main.scss';

import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { store } from './utils/storeConfig';
import { adaptiveMenu } from './utils/adaptibeMenu';

import { BrowserRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.querySelector('.wrapper')
)
adaptiveMenu();