import React, { Component } from 'react';
import Situation from "./Components/SituationComponent"
import Robot from "./model/Robot"
import Welcome from './welcome';
import Question from './Components/question';
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
