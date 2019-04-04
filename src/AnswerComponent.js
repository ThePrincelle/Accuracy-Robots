import React, { Component } from 'react';

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
        return <button onClick={this.handleClick}>{this.state.text}</button>
    }
}
