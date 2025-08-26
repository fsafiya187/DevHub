import React from "react";
import NotificationItem from "./NotificationItem";

export default function NotificationsList({ notifications, markAsRead }) {
  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      {notifications.length === 0 && <p>No notifications yet!</p>}
      {notifications.map((n) => (
        <NotificationItem key={n.id} notification={n} markAsRead={markAsRead} />
      ))}
    </div>
  );
}
