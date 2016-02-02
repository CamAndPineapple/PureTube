import React from 'react';


const VideoListItem = (props) => {

  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;

  const onVideoClick = (e) => {
    onVideoSelect(video);

  }

  return (
    <li className="list-group-item" onClick={onVideoClick} >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
