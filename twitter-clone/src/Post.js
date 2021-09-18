import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@mui/icons-material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1393954096776761344/XXUnwfUF_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Akash K{" "}
              <span className="post__headerUserName">
                <VerifiedUserIcon className="post__badge" />
                @aakashkumbhare
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge the twitter clone</p>
          </div>
          <img
            src="https://media.giphy.com/media/LpisZdXM3yOFuYnv07/giphy.gif?cid=ecf05e47c92e54ead80f345e8c5c467d89df72dab8bedef0&rid=giphy.gif&ct=g"
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
