import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import Message from "./Message";
import axios from "../axios";
import { useEffect, useState } from "react";

export default function SendMessage({ messages }) {
  const [text, setText] = useState("");
  const [seed,setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.floor(Math.random()*5000))
  }, [])
  function handleForm(e) {
    e.preventDefault();
    axios
      .post("/messages/new", {
        message: text,
        name: "name1",
        timestamp: `${new Date().toUTCString()}`,
        received: "false",
      })
      .then((result) => {});
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg?background=%23ebebeb`}/>
        <div className="chat__headerCenter">
          <h3>Group Name</h3>
          <p>Last seen at 10:50 pm</p>
        </div>
        <div className="chat__headerRight"></div>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="chat__body">
        {messages.map((message,index) => {
          return <Message key={index} message={message} />;
        })}
      </div>
      <div className="chat__footer">
        <div className="chat__footerLeft"></div>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <div className="chat__footerText">
          <form onSubmit={(e) => handleForm(e)}>
            <input
              placeholder="Type a message"
              onChange={(e) => setText(e.target.value)}
            ></input>
            <button type="submit" className="sendButton">
              <SendIcon />
            </button>
          </form>
        </div>
        <div className="chat__footerRight">
          <MicIcon />
        </div>
      </div>
    </div>
  );
}
