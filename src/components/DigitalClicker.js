// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    const currentClicks = this.state.timesClicked
    this.setState({timesClicked: currentClicks + 1});
  }


  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
