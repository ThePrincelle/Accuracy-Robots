import React, { Component } from 'react';
import './question.css';
import { Button, Card, ButtonToolbar } from 'react-bootstrap';

class Question extends Component {

	constructor(props) {
	    super(props)

	    this.state = {
	        question: "A Question this is."
	    }
    }


  render() {
    return (
        <Card bg="light" style={{ width: '18rem' }}>
            <Card.Body>
                <h1>{this.state.question}</h1>
                <ButtonToolbar>
                    <Button variant="success" size="sm">Yes</Button>
                    <Button variant="danger" size="sm">No</Button>
                </ButtonToolbar>
            </Card.Body>
        </Card>
    );
  }
}

export default Question;
