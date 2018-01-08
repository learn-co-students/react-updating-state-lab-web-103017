// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = { errors: [],
                   user: null,
                   settings: { bitrate: 8, video: { resolution: '1080p' } }
                 }
  }

    //
    // if (event.target.className === "bitrate") {
    // this.setState({
    //   settings: { bitrate: 12 }
    //   })
    // }
    //
    // else if (event.target.className === "resolution") {
    // this.setState({
    //     settings: {video: { resolution: '720p' } }
    //   })
    // }

    handleBitrate = () => {
       this.setState({
         settings: Object.assign({}, this.state.settings, {
           bitrate: 12
         })
       })
     }

     handleResolution = () => {
       this.setState({
         settings: Object.assign({}, this.state.settings, {
           video: Object.assign({}, this.state.settings.video, {
             resolution: '720p'
           })
         })
       })
     }


  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
        <br/>
        <button className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
