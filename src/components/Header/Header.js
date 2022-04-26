import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
function Header() {
  return (
    <div className='header'>
      <div className='left-side-box'>
        <div className='burger-menu'>
          <MenuSharpIcon className='burger-icon' />
        </div>
        <a href='#'>
          {" "}
          <img
            className='logo-img'
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
            alt='youtube logo'
          />
        </a>
      </div>
      <div className='input-and-micro'>
        <div className='input'>
          <input type='text' placeholder='Search' />
          <SearchIcon className='search-icon' />
        </div>
        <div className='micro'>
          <KeyboardVoiceIcon className='micro-icon' />
        </div>
      </div>
      <div className='right-side-box'>
        <div className='right-side-icons'>
          <VideoCallOutlinedIcon className='right-icon' />
          <AppsOutlinedIcon className='right-icon' />
          <NotificationsNoneOutlinedIcon className='right-icon' />
        </div>
        <div className='profile'>
          <img
            src='https://i.pinimg.com/originals/cb/05/f0/cb05f0ca5a29d510201e2c112aa2c0fa.jpg'
            alt='profile image'
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
