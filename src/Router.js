import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Welcome from './welcome';
import Game from './MainGame';

function Accueil() {
  return (<Welcome/>);
}

function Main() {
  return (<Game/>);
}

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Accueil} />
        <Route path="/game/" component={Main} />
    </Router>
  );
}

export default AppRouter;




