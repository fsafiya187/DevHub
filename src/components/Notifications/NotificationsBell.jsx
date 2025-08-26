import React from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationsBell({ unreadCount, onClick }) {
  return (
    <div style={{ position: "relative", cursor: "pointer" }} onClick={onClick}>
      <FaBell size={24} />
      {unreadCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            background: "red",
            color: "#fff",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {unreadCount}
        </span>
      )}
    </div>
  );
}
