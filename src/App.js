import React, { Component } from 'react';
import Situation from "./view/SituationComponent"
import Robot from "./model/Robot"
import Welcome from './view/welcome';
import Question from './view/question';
import { Container } from 'react-bootstrap';
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App" class="App">
					<Question/>
			</div>
		);
	}
}

export default App;
