import React, { Component } from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
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
