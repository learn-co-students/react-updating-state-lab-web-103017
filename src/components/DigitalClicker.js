import React from 'react';// Code DigitalClicker Component Here

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleClick = () => {
    let times = this.state.timesClicked + 1
    this.setState({
      timesClicked: times
    })
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  }
}
