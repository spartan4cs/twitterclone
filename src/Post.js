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
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
             {displayName}{" "}
              <span className="post__headerUserName">
                {verified &&  <VerifiedUserIcon className="post__badge" />}
                @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img
            src={image}
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
