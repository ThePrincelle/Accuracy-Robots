import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Question extends Component {
    render()
    {
        //verifie que les reponses ont bien étées définies
        let ans;
        if(this.props.answers)
        {
            ans = this.props.answers.map(ans => {
                return ans
            })
        }

        return (
            <Card className="question" style={{ width: '20rem' }}>
                <Card.Header as="h5">
                    Question
                </Card.Header>
                <Card.Body style={{ textAlign: "justify" }}>
                    {this.props.text}
                </Card.Body>
                <Card.Footer className="answers">
                    {ans}
                </Card.Footer>
            </Card>
        )
    }
}
