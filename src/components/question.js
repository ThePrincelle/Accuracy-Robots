import React, { Component } from 'react';
import '../css/question.css';
import { Button, Card } from 'react-bootstrap';
import Law from './law';

class Question extends Component {

	constructor(props) {
	    super(props)

	    this.state = {
	        question: "A Question this is."
	    }
    }

    render() {
        return (
            <div>
            <Card style={{ width: '20rem' }}>
                <Card.Header as="h5">
                    {this.state.question}
                </Card.Header>
                <Card.Body>
                    <Button variant="success" size="sm" style={{ margin: '10px' }}>Yes</Button>
                    <Button variant="danger" size="sm" style={{ margin: '10px' }}>No</Button>
                </Card.Body>
            </Card>
            <Law sidebarOpen='true'></Law>
            </div>
        );
    }
}

export default Question;
