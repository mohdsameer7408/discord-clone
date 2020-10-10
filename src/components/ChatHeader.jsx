import React from "react";
import "../assets/css/ChatHeader.css";
import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
} from "@material-ui/icons";

function ChatHeader({ channelId, channelName }) {
  return (
    <div className="chatheader">
      <div className="chatheader_left">
        <h3>
          <span className="chatheader_hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatheader_right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />
        <div className="chatheader_search">
          <input placeholder="Search" type="text" name="" id="search" />
          <SearchRounded />
        </div>
        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  );
}

export default ChatHeader;
