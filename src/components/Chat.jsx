import React, { useEffect, useState } from "react";
import "../assets/css/Chat.css";
import ChatHeader from "./ChatHeader";
import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "../features/userSlice";
import db from "../config/firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              message: doc.data(),
            }))
          );
        });
    }
  }, [channelId]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (channelId && input) {
      db.collection("channels").doc(channelId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        text: input,
        user,
      });
      setInput("");
    }
  };

  return channelId ? (
    <div className="chat">
      <ChatHeader channelId={channelId} channelName={channelName} />
      <div className="chat_messages">
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message
              key={id}
              message={message.text}
              user={message.user}
              timestamp={message.timestamp}
            />
          ))}
        </FlipMove>
      </div>
      <div className="chat_input">
        <AddCircle fontSize="large" />
        <form action="">
          <input
            placeholder={`Message #${channelName}`}
            type="text"
            name="message"
            id="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="chat_inputButton"
            type="submit"
            disabled={!channelId}
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat_inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  ) : (
    <div className="chat_none">
      <h3>Select a channel!</h3>
    </div>
  );
}

export default Chat;
