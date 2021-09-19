import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";
import { collection, doc, setDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    let postData = {
      displayName: "akash",
      username: "akash404",
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1393954096776761344/XXUnwfUF_400x400.jpg",
      verified: true,
      text: tweetMessage,
    };
    console.log(postData);

    // Add a new document with a generated id
    const newPostRef = doc(collection(db, "posts"));

    // later...
     setDoc(newPostRef, postData);

     //reset
     setTweetImage("");
     setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1393954096776761344/XXUnwfUF_400x400.jpg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image url"
          type="text"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
