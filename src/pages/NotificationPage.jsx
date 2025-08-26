import React, { useState, useContext } from "react";
import { Card, Badge, Button, Form, InputGroup } from "react-bootstrap";
import { NotificationsContext } from "../context/NotificationsContext";

export default function NotificationsPage() {
  const { notifications, createNotification, markAllAsRead, markAsRead } = useContext(NotificationsContext);
  const [newMessage, setNewMessage] = useState("");

  const handleAdd = () => {
    createNotification(newMessage);
    setNewMessage("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>My Notifications</h2>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type a new notification..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="success" onClick={handleAdd}>Add</Button>
      </InputGroup>

      <Button
        variant="primary"
        onClick={markAllAsRead}
        style={{ marginBottom: "10px" }}
        disabled={notifications.length === 0}
      >
        Mark All as Read
      </Button>

      {notifications.length === 0 && <p>No notifications yet.</p>}

      {notifications.map((notif) => (
        <Card
          key={notif.id}
          style={{
            marginBottom: "10px",
            backgroundColor: notif.read ? "#f8f9fa" : "#fff",
          }}
        >
          <Card.Body>
            {!notif.read && <Badge bg="success" style={{ marginRight: "10px" }}>New</Badge>}
            <span>{notif.message}</span>
            <div style={{ fontSize: "12px", color: "#888" }}>
              {notif.time?.toDate ? notif.time.toDate().toLocaleString() : new Date(notif.time).toLocaleString()}
            </div>
            {!notif.read && <Button size="sm" variant="link" onClick={() => markAsRead(notif.id)}>Mark as read</Button>}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
