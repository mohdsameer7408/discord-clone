import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../features/appSlice";
import "../assets/css/SidebarChannel.css";

function SidebarChannel({ id, channel }) {
  const dispatch = useDispatch();

  const handleOpenChannel = () => {
    dispatch(setChannelInfo({ id, channelName: channel.channelName }));
  };

  return (
    <div className="sidebar_channel" onClick={handleOpenChannel}>
      <h4>
        <span className="sidebar_channelHash">#</span>
        {channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
