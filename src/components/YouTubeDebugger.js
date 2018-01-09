// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      },
    })
  };

  bitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.settings.bitrate}</p>
        <button className="bitrate" onClick={this.bitClick}></button>
        <p>{this.state.settings.video.resolution}</p>
        <button className="resolution" onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
// Code YouTubeDebugger Component Here
