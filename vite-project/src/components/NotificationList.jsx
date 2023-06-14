import React from "react";
import "../styles/notificationList.css";
import NotificationItem from "./NotificationItem";
import imgChess from "../images/image-chess.webp";
import avatarAngela from "../images/avatar-angela-gray.webp";
import avatarAnna from "../images/avatar-anna-kim.webp";
import avatarJacob from "../images/avatar-jacob-thompson.webp";
import avatarKimberly from "../images/avatar-kimberly-smith.webp";
import avatarMark from "../images/avatar-mark-webber.webp";
import avatarNathan from "../images/avatar-nathan-peterson.webp";
import avatarRizky from "../images/avatar-rizky-hasanuddin.webp";

const NotificationList = () => {
  return (
    <div className="notification-list">
      <NotificationItem
        avatar={avatarMark}
        name="Mark Webber"
        action="reacted to your recent post"
        obj="My first tournament today!"
        time="1m ago"
      />
      <NotificationItem
        avatar={avatarAngela}
        name="Angela Gray"
        action="followed you"
        time="5m ago"
      />
      <NotificationItem
        avatar={avatarJacob}
        name="Jacob Thompson"
        action="has joined your group"
        obj="Chess Club"
        time="1 day ago"
      />
      <NotificationItem
        avatar={avatarRizky}
        name="Rizky Hasanuddin"
        action="sent you a private message"
        message="Hello,thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        time="5 days ago"
      />
      <NotificationItem
        avatar={avatarKimberly}
        name="Kimberly Smith"
        action="commented on your picture"
        picture={imgChess}
        time="1 week ago"
      />
      <NotificationItem
        avatar={avatarNathan}
        name="Nathan Peterson"
        action="reacted to your recent post"
        obj="5 end-game strategies to increase your win rate"
        time="2 weeks ago"
      />
      <NotificationItem
        avatar={avatarAnna}
        name="Anna Kim"
        action="left the group"
        obj="Chess Club"
        time="2 weeks ago"
      />
    </div>
  );
};

export default NotificationList;
