// Code YouTubeDebugger Component Here
import React from 'react'


class YouTubeDebugger extends React.Component {
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

  render(){
    return (<div><button className="resolution" onClick={this.handleResClick}/>
  <button className="bitrate" onClick={this.handleBitClick}/></div>)
  }
  handleResClick = () => {
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}

      }
    })
  }

  handleBitClick = () => {
    this.setState({settings: {...this.state.settings, bitrate: 12}})
  }
}

export default YouTubeDebugger
