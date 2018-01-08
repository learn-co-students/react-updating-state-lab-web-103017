// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.


import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = { errors: [],
                  user: null,
                  settings: { bitrate: 8,
                              video: { resolution: '1080p' }
                             }
                }
  }

  handleBitClick = () => {
    this.setState({settings: {
      ...this.state.settings, bitrate: 12
    }})
  }

  handleResClick = () => {
    this.setState({settings: {
        ...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}
    }})
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitClick}>'bitrate' {this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.handleResClick}>'resolution' {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
