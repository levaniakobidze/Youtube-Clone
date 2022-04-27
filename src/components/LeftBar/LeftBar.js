import React from "react";
import "./LeftBar.css";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistorySharpIcon from "@mui/icons-material/HistorySharp";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MenuItem from "./MenuItem/MenuItem";
import Subscribers from "./Subscribers/Subscribers";
function LeftBar({ activeMenu, setActiveMenu }) {
  console.log(activeMenu);
  return (
    <div className={activeMenu ? "leftBar" : "leftBar non-active"}>
      <div className='scroll'>
        <div className='leftBar-content'>
          <div
            className={
              activeMenu ? "leftBar-menu" : "leftBar-menu non-active-menu"
            }>
            <MenuItem Icon={HomeSharpIcon} name='მთავარი' />
            <MenuItem Icon={ExploreOutlinedIcon} name='აღმოჩენა' />
            <MenuItem Icon={VideoLibraryOutlinedIcon} name='Shorts' />
            <MenuItem Icon={SubscriptionsOutlinedIcon} name='გამოწერები' />
            <hr />
            <MenuItem Icon={VideoLibraryOutlinedIcon} name='ბიბლიოთეკა' />
            <MenuItem Icon={HistorySharpIcon} name='ისტორია' />
            <MenuItem Icon={OndemandVideoSharpIcon} name='თქვენი ვიდეოები' />
            <MenuItem
              Icon={WatchLaterOutlinedIcon}
              name='მოგვიანებით სანახ...'
            />
            <MenuItem Icon={ThumbUpOutlinedIcon} name='მოწონებული ვიდე...' />
            <hr />
            <Subscribers />
          </div>
          <div
            className={
              activeMenu
                ? "non-active-menu-cont"
                : "non-active-menu-cont non-active-menu-cont-active"
            }>
            <div className='none-active-menu-item'>
              <HomeSharpIcon />
              <p>მთავარი</p>
            </div>
            <div className='none-active-menu-item'>
              <ExploreOutlinedIcon />
              <p>აღმოჩენა</p>
            </div>
            <div className='none-active-menu-item'>
              <HistorySharpIcon />
              <p>Shorts</p>
            </div>
            <div className='none-active-menu-item'>
              <SubscriptionsOutlinedIcon />
              <p>გამომწერები</p>
            </div>
            <div className='none-active-menu-item'>
              <VideoLibraryOutlinedIcon />
              <p>ბიბლიოთეკა</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
