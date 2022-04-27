import React from "react";
import "./VideoContent.css";
import { Data } from "./VideoContentData";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";

function VideoContent({ activeMenu }) {
  return (
    <div className='videoContent'>
      {Data.map((video) => {
        let videoName = video.videoName.substring(0, 40);

        return (
          <a
            href='#'
            className={
              activeMenu ? "video-item" : "video-item video-item-non-active"
            }>
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

      <div className='responsive-menu'>
        <a className='resp-menu-item' href='#'>
          {" "}
          <HomeSharpIcon /> <p>მთავარი</p>{" "}
        </a>
        <a className='resp-menu-item' href='#'>
          {" "}
          <HistorySharpIcon /> <p>Shorts</p>{" "}
        </a>
        <a className='resp-menu-item' href='#'>
          {" "}
          <SubscriptionsOutlinedIcon /> <p>გამომწერები</p>{" "}
        </a>
        <a className='resp-menu-item' href='#'>
          {" "}
          <VideoLibraryOutlinedIcon /> <p>ბიბლიოთეკა</p>
        </a>
      </div>
    </div>
  );
}

export default VideoContent;
