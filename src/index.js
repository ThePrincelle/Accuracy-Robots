import React from 'react';
import ReactDOM from 'react-dom';
import './stars'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Router from './Router';
import {Helmet} from "react-helmet";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Helmet>
            <title>Accuracy Robots</title>
            <meta name="description" content="A game with a robot." />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=yes" />
        </Helmet>
        <Router />
    </div>, 
    document.getElementById('root')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
