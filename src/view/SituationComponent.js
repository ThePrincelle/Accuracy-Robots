import React, { Component } from 'react';

export default class Situation extends Component {
  state = {
    title: this.props.defaultTitle || "Situation",
    sentence: this.props.initialValue || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in euismod velit. Suspendisse maximus eu magna a molestie. Proin at arcu eu eros auctor venenatis nec vitae augue. Donec suscipit libero posuere ante cursus faucibus. Donec egestas congue mi, vitae consectetur nisl tincidunt in. Integer iaculis porttitor tincidunt. Nam id neque orci."
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
