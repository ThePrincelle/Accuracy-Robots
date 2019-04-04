import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

export default class Answer extends Component {
    state = {
        text: this.props.text,
        value: this.props.value
    }

    handleClick = () => {
        this.props.callbackToParent(this.state.value)
    }

    render()
    {
        return <Col md="auto"><Button onClick={this.handleClick}>{this.state.text}</Button></Col>
    }
}
