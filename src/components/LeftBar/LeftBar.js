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
function LeftBar() {
  return (
    <div className='leftBar'>
      <div className='scroll'>
        <div className='leftBar-content'>
          <div className='leftBar-menu'>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
