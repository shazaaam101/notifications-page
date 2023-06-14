import React, { useContext } from "react";
import "../styles/notificationBar.css";
import { ReadContext } from "../readContext";

const NotificationBar = () => {
  const { totalUnread, setTotalUnread } = useContext(ReadContext);
  return (
    <div className="notification-bar">
      <div className="notified-unread">
        Notifications <span>{totalUnread}</span>
      </div>
      <div className="mark-all-as-read" onClick={() => setTotalUnread(0)}>
        Mark all as read
      </div>
    </div>
  );
};

export default NotificationBar;
