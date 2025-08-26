import React from "react";
import moment from "moment";

export default function NotificationItem({ notification, markAsRead }) {
  return (
    <div
      onClick={() => markAsRead(notification.id)}
      style={{
        padding: "10px",
        borderBottom: "1px solid #eee",
        backgroundColor: notification.read ? "#f9f9f9" : "#e6f7ff",
        cursor: "pointer",
      }}
    >
      <strong>{notification.title}</strong>
      <p style={{ margin: "5px 0" }}>{notification.description}</p>
      <small style={{ color: "#888" }}>{moment(notification.timestamp).fromNow()}</small>
    </div>
  );
}
