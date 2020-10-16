import React from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";
const Message = ({ username, message }) => {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username}:{message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
