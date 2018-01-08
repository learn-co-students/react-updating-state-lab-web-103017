import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }
  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: "720p" }
      }
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.updateBitrate} className="bitrate">
          Bitrate
        </button>
        <button onClick={this.updateResolution} className="resolution">
          Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
