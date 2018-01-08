// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  timesClicked = () => {
     this.setState({ timesClicked: this.state.timesClicked + 1 });
  }

  render() {
    return(
      <button onClick={() => this.timesClicked()}>{this.state.timesClicked}</button>
    );
  }
}
