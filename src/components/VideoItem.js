import './videoItem.css';

import React from 'react'

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="video-item ui item" onClick={() => onVideoSelect(video)}>
        <div className="img-wrapper">
          <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} alt=""/>
        </div>
        <div className="content">
          <h4 className="header">{video.snippet.title}</h4>
        </div>
    </div>
  )
}
export default VideoItem;