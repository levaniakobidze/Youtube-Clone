import React from "react";
import "./VideoContent.css";
import { Data } from "./VideoContentData";

function VideoContent() {
  return (
    <div className='videoContent'>
      {Data.map((video) => {
        let videoName = video.videoName.substring(0, 40);

        return (
          <a href='#' className='video-item'>
            <div className='video-img'>
              <img src={video.videoImg} alt='video image' />
            </div>
            <div className='profile-and-name'>
              <img src={video.profileImg} alt='profile image' />
              <p>{videoName}</p>
            </div>
            <div className='channel-name'>
              <p>{video.channelName}</p>
            </div>
            <div className='views-and-time'>
              <p>{video.view} ნახვა</p>
              <p>{video.time} წინ</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default VideoContent;
