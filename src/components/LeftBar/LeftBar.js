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
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagRoundedIcon from "@mui/icons-material/OutlinedFlagRounded";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
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
            <p className='title'>გამოწერები</p>
            <Subscribers />
            <hr />
            <p className='title'> მეტი YouTube-სგან </p>
            <MenuItem Icon={VideogameAssetOutlinedIcon} name='ვიდეო თამაშები' />
            <MenuItem
              Icon={SettingsInputAntennaOutlinedIcon}
              name='პირდაპირი'
            />
            <MenuItem Icon={SportsBaseballOutlinedIcon} name='სპორტი' />
            <hr />
            <MenuItem Icon={SettingsOutlinedIcon} name='პარამეტრები' />
            <MenuItem
              Icon={OutlinedFlagRoundedIcon}
              name='შეტყობინებეის ისტორია  '
            />
            <MenuItem Icon={HelpOutlineOutlinedIcon} name='დახმარება' />
            <MenuItem Icon={FeedbackOutlinedIcon} name='გამოხმაურება' />
            <hr />
            <p className='text'>
              ჩვენ შესახებპრესასაავტორო
              უფლებებიდაგვიკავშირდითშემქმნელებირეკლამირებადეველოპერები
            </p>
            <p className='text'>
              პირობებიკონფიდენციალურობაწესები და უსაფრთხოებაროგორ მუშაობს
              YouTubeგამოსცადეთ ახალი ფუნქციები
            </p>
            <p className='text'> © 2022 Google LLC</p>
          </div>
          <div
            className={
              activeMenu
                ? "non-active-menu-cont"
                : "non-active-menu-cont non-active-menu-cont-active"
            }>
            <a href='#' className='none-active-menu-item'>
              <HomeSharpIcon className='non-active-icon' />
              <p>მთავარი</p>
            </a>
            <a href='#' className='none-active-menu-item'>
              <ExploreOutlinedIcon className='non-active-icon' />
              <p>აღმოჩენა</p>
            </a>
            <a href='#' className='none-active-menu-item'>
              <HistorySharpIcon className='non-active-icon' />
              <p>Shorts</p>
            </a>
            <a href='#' className='none-active-menu-item'>
              <SubscriptionsOutlinedIcon className='non-active-icon' />
              <p>გამომწერები</p>
            </a>
            <a href='#' className='none-active-menu-item'>
              <VideoLibraryOutlinedIcon className='non-active-icon' />
              <p>ბიბლიოთეკა</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
