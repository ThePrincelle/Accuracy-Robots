import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import Welcome from './view/welcome';
import Question from './view/question';

function Accueil() {
  return (<Welcome/>);
}

function Main() {
  return (<Question/>);
}

function AppRouter() {
  return (
    <div>
    <Helmet>
          <title>Accuracy Robots</title>
          <meta name="description" content="A game with a robot." />
      </Helmet>
    <Router>
        <Route path="/" exact component={Accueil} />
        <Route path="/game/" component={Main} />
    </Router>
    </div>
  );
}

export default AppRouter;




