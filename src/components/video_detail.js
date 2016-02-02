import React from 'react';

const VideoDetail = (props) => {

  const video = props.video;

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const youtubeLink = `https://youtu.be/${videoId}`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="details-title">{video.snippet.title}</div>
        <div className="details-description">{video.snippet.description}</div>
        <div className="details-youtube">Check out full description on <a className="youtube-link" href={youtubeLink}>Youtube</a></div>
      </div>
    </div>
  );
}

export default VideoDetail;
