import React, { Component } from 'react';
import Situation from "./SituationComponent"
import Robot from "./model/Robot"
import Welcome from './welcome';
import Question from './question';
import "./css/App.css";

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
