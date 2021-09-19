import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      let res = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data(),
        };
      });
      setPosts(res);
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home UPdate</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.data.displayName}
            username={post.data.username}
            verified={post.data.verified}
            text={post.data.text}
            image={post.data.image}
            avatar={post.data.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
