// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateHandler = () => {
    this.setState({
      settings: {...this.state.settings,
           bitrate: 12,}
    })
  }

  resolutionHandler = () => {
    this.setState({
      settings: {...this.state.settings,
        video: {resolution: '720p',}
      }
    })
  }


  render(){
    return (
    <div className="youtubedebugger">
      <button className="bitrate" onClick={this.bitrateHandler}>Change Bitrate</button>
      <button className="resolution" onClick={this.resolutionHandler}>Change Resolution</button>
    </div>
    )
  }


}

export default YouTubeDebugger;
