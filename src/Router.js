import React, { Component } from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    </Router>
  );
}


export default AppRouter;




