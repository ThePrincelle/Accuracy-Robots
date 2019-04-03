import React, { Component } from 'react';
import './question.css';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Question extends Component {

	constructor(props) {
	    super(props)

	    this.state = {
	        question: "This is a question"
	    }
	}

  render() {
    return (
      <div className="Question">
        <h1>This is a question</h1>
        <ButtonToolbar>
            <Button variant="success" size="sm">Yes</Button>
            <Button variant="danger" size="sm">No</Button>
        </ButtonToolbar>
        
      </div>
    );
  }
}

export default Question;
