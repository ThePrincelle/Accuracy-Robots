import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
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
    <Router>
        <Route path="/" exact component={Accueil} />
        <Route path="/game/" component={Main} />
        <Route path="*" component={Accueil} />
    </Router>
  );
}

export default AppRouter;




