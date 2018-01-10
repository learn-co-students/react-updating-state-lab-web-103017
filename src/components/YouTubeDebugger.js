// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component
{

  constructor()
  {
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

  changeBitrate = () =>
  {
     this.setState({
       settings: Object.assign({}, this.state.settings, {
         bitrate: 12,
       }),
     })
     console.log(this.state.settings)
  }
  changeResolution = () =>
  {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p",
        }),
      })
    })

  }

  render()
  {
    return(
      <div>
        <button onClick ={this.changeBitrate} className="bitrate">Bitrate</button>
        <button onClick ={this.changeResolution} className="resolution">Resolution</button>
      </div>
      )
  }
}
export default YouTubeDebugger
