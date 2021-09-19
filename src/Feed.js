import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Akash K"
        username="@aakash404"
        verified={true}
        text="It's working"
        image="https://media.giphy.com/media/LpisZdXM3yOFuYnv07/giphy.gif?cid=ecf05e47c92e54ead80f345e8c5c467d89df72dab8bedef0&rid=giphy.gif&ct=g"
        avatar="https://pbs.twimg.com/profile_images/1393954096776761344/XXUnwfUF_400x400.jpg"
      />

      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
