import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Answer extends Component {
    handleClick = () => {
        this.props.callbackToParent(this.props.value)
    }

    render()
    {
        return <Button style={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "5px" }} size="sm" block onClick={this.handleClick}>{this.props.text}</Button>
    }
}
