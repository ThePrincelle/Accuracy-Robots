import React, { Component } from 'react';
import Situation from "./SituationComponent"
import Robot from "./Robot"

class App extends Component {
  render() {
    return (
      <Situation initialValue="Test de phrase"></Situation>
    );
  }
}

export default App;
