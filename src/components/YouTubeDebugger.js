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

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
