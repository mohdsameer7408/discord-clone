import React, { forwardRef } from "react";
import "../assets/css/Message.css";
import { Avatar } from "@material-ui/core";

const Message = forwardRef(({ id, message, user, timestamp }, ref) => {
  return (
    <div className="message" ref={ref}>
      <Avatar src={user.photoURL} alt={user.displayName} />
      <div className="message_info">
        <h4>
          {user.displayName}{" "}
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
});

export default Message;
