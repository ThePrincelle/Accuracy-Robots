import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Question extends Component {
    state = {
        title:this.props.title || "Question",
        text: this.props.text || "Enonce",
        answers: this.props.answers
    }

    render()
    {
        //verifie que les reponses ont bien étées définies
        let ans;
        if(this.state.answers)
        {
            ans = this.state.answers.map(ans => {
                return ans
            })
        }

        return (
            <Card className="question" style={{ width: '20rem' }}>
                <Card.Header as="h5">
                    {this.state.title}
                </Card.Header>
                <Card.Body style={{ textAlign: "justify" }}>
                    {this.state.text}
                </Card.Body>
                <Card.Footer className="answers">
                    {ans}
                </Card.Footer>
            </Card>
        )
    }
}
