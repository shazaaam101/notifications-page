import React, { useContext, useEffect, useMemo, useState } from "react";
import "../styles/notificationItem.css";
import { ReadContext } from "../readContext";

const NotificationItem = ({
  avatar,
  name,
  action,
  obj,
  time,
  message,
  picture,
}) => {
  const { totalUnread, setTotalUnread } = useContext(ReadContext);
  const [isRead, setIsRead] = useState(false);
  let isMount = true;
  const handleClick = () => {
    !isRead && setTotalUnread((prev) => prev - 1);
    setIsRead(true);
  };
  useEffect(() => {
    if (totalUnread === 0 && isMount) {
      setIsRead(true);
    }
    return () => {
      isMount = false;
    };
  }, [totalUnread, isRead]);
  return (
    <div className="notification-item" onClick={handleClick}>
      <div className="wrapper">
        <div className="avatar-img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="content">
          <span className="name">
            <b>{name}</b>
          </span>
          <span className="action">{action}</span>
          {obj && (
            <span className={`obj ${action.includes("group") && "group"}`}>
              <b>{obj}</b>
            </span>
          )}
          {!isRead && <div className="mark-unread"></div>}
          <div className="time">{time}</div>

          {message && <div className="message">{message}</div>}
        </div>
        {picture && (
          <div className="picture">
            <img src={picture} alt="post" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
