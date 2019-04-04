import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Welcome from './welcome';
import Game from './MainGame';
import About from './about';

function Accueil() {
  return (<Welcome/>);
}

function Main() {
  return (<Game/>);
}

function about(){
  return (<About/>)
}
function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Accueil} />
        <Route path="/game/" component={Main} />
        <Route path="/about/" component={about}/>
    </Router>
  );
}

export default AppRouter;




