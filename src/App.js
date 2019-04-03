import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Situation from "./view/SituationComponent"
import Robot from "./model/Robot"
import Welcome from './view/welcome';
import Question from './view/question';

class App extends Component {



  render() {
    return (
      <div className="App">
		<Container>
			<Question/>
		</Container>
      </div>
    );
  }
}

export default App;
