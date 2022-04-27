import React from "react";
import "./Subscribers.css";
import { Data } from "./SubscribersData";

function Subscribers() {
  return (
    <div className='subscribers'>
      {Data.map((channel) => {
        return (
          <a href={channel.subcriberProfileLink} className='subscribers-item'>
            <img
              className='subscribers-profile-img'
              src={channel.icon}
              alt='profile image'
            />
            <p>{channel.name}</p>
          </a>
        );
      })}
    </div>
  );
}

export default Subscribers;
