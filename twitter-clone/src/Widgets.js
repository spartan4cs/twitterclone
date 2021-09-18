import { Search } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";
import {TwitterTweetEmbed,TwitterTimelineEmbed, TwitterShareButton} from "react-twitter-embed"
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainter">
          <h2>What's Happening</h2>
          <TwitterTweetEmbed tweetId={"1439241500152385539"}/>
          <TwitterTimelineEmbed sourceType="profile" screenName="linkedinselling" options={{height:400}}/>
          <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{text:"#react is awesome",via:"linkedinselling"}}/>
      </div>
    </div>
  );
}

export default Widgets;
