import React, { useState } from "react";
import "./messagesender.scss";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useStateValue } from "../../Context/Stateprovider";
import db from "../../firebase";
import firebase from "firebase";
const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imgurl, setImgurl] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imgurl,
      username: user.displayName,
    });
    setInput("");
    setImgurl("");
  };

  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar src={user && user.photoURL} />
        <form>
          <input
            className="messagesender__input"
            placeholder={`What's on your mind? ${user && user.displayName}`}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <input
            placeholder="Image URL"
            className="messagesender__input2"
            value={imgurl}
            onChange={(e) => setImgurl(e.target.value)}
          />
          <button onClick={onSubmit}>Hidden submit</button>
        </form>
      </div>
      <div className="messagesender__bottom">
        <div className="messagesender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h2>Live Video</h2>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h2>Photo/Video</h2>
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h2>Feeling/Activity</h2>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
