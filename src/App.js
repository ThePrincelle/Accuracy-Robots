import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Situation from "./SituationComponent"
import Robot from "./Robot"
import Welcome from './welcome';
import Question from './question';

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
