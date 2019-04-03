import React, { Component } from 'react';

export default class Situation extends Component {
  state = {
    title: this.props.defaultTitle || "Situation",
    sentence: this.props.initialValue || ""
  }

  render() {
    return <>
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.sentence}</p>
      </div>
    </>
  }
}
