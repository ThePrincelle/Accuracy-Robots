import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
        return <Button style={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "5px" }} size="sm" block onClick={this.handleClick}>{this.state.text}</Button>
    }
}
