import React, { useEffect, useState } from "react";
import "../assets/css/Sidebar.css";
import {
  Add,
  Call,
  ExpandMore,
  Headset,
  InfoOutlined,
  Mic,
  Settings,
  SignalCellularAlt,
} from "@material-ui/icons";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../config/firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = (event) => {
    const channelName = prompt("Enter a channel name: ");

    if (channelName) {
      db.collection("channels").add({
        channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Valorant</h3>
        <ExpandMore />
      </div>
      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMore />
            <h4>Text Channels</h4>
          </div>
          <Add className="sidebar_addChannel" onClick={handleAddChannel} />
        </div>
        <div className="sidebar_channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel key={id} id={id} channel={channel} />
          ))}
        </div>
      </div>
      <div className="sidebar_voice">
        <SignalCellularAlt className="sidebar_voiceIcon" fontSize="large" />
        <div className="sidebar_voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>
      <div className="sidebar_profile">
        <Avatar
          className="sidebar_profilePicture"
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => auth.signOut()}
        />
        <div className="sidebar_profileInfo">
          <h3>@{user?.displayName}</h3>
          <p>#{user?.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar_profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
