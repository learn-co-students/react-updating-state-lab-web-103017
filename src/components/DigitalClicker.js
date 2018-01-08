// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = { timesClicked: 0}
  }

  handleClick = (event) => {
    this.setState({
      timesClicked: this.state.timesClicked+1
    })
  }

  render() {
    return(
      <div>
        <button type="`${timesClicked}`" onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
