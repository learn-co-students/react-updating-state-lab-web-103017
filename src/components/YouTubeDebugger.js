// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

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

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  changeResolution = () => {
    console.log(this.state.settings.video.resolution);
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
        }
      },
    });
  }


  render() {
    return (
      <div>
        <button onClick={this.changeBitrate} className="bitrate">Change Bitrate</button>
        <button onClick={this.changeResolution} className="resolution">Change Resolution</button>
      </div>
    );
  }
}
