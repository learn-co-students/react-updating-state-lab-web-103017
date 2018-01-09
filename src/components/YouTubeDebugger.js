import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = { 
      errors: [], 
      user: null, 
      settings: { 
        bitrate: 8, 
        video: { resolution: '1080p' } 
      } 
    };
  }

  // handleClick = (event) => {
  //   if (event.target.className === "bitrate") {
  //     this.setState({
  //       ...this.state.settings,
  //       bitrate: 12
  //     })
  //   } else if (event.target.className === "resolution") {
  //     this.setState({
  //       ...this.state.setttings,
  //       video: {resolution: '720p'}
  //     })
  //   }
  // }

  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    })
  }


  render() {
    return (
      <div>
      <button onClick={this.handleBitClick} className="bitrate"></button>
      <button onClick={this.handleResClick} className="resolution"></button>
      </div>
    )
  }


}

export default YouTubeDebugger;