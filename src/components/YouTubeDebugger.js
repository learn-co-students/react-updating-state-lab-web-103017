// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate:8,
        video:{resolution:'1080p'}
      }
    };
  }

  handleBitrate = () => {
    this.setState({
      settings: Object.assign({},this.state.settings, {
        bitrate: 12,
      })
    })
  }

  handleResolution = () => {
    this.setState({
      settings: Object.assign({},this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        }),
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Bitrate:{this.state.settings.bitrate}</h1>
        <button className='bitrate' onClick={this.handleBitrate}>Change Bitrate</button>
        <h1>Resolution:{this.state.settings.video.resolution}</h1>
        <button className='resolution' onClick={this.handleResolution}>Change Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
