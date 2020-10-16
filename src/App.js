import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel, Input, Typography } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    setUsername(prompt("Enter your username"));
  }, []);
  React.useEffect(() => {
    //run once when app component loads
    // as any changes happen in the db in firebase,the following line is executed,
    // what it does is that it takes the snapshot of the db there in firebase and
    // puts it in snapshot
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  const sendMessage = (event) => {
    // All the logic to send the message resides Here.
    db.collection("messages").add({
      message: input,
      username: username,
      //we are giving the current of the database
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    console.log(messages);
  };
  return (
    <div className="App">
      <Typography variant="h4" color="primary">
        {" "}
        Arun Pratap Singh ka private group chat!!
      </Typography>
      <Typography variant="h3"> Welcome {username}!!</Typography>
      {/* Input Field */}
      <FormControl>
        <InputLabel>Enter The Message Bro</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        {/*   Input submit Button */}
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          style={{ marginTop: "1em" }}
          onClick={sendMessage}
        >
          Send The Message
        </Button>
      </FormControl>

      {/* All The messgaes  */}
      {messages.map((message) => {
        return <Message username={username} message={message} />;
      })}
    </div>
  );
}

export default App;
