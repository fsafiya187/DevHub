// src/pages/Home.jsx
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FaBook, FaClipboardList, FaBullseye, FaGraduationCap, FaBell, FaTools, FaUsers, FaFileAlt, FaBriefcase, FaUserCircle, FaCode } from "react-icons/fa";
import { NotificationsContext } from "../context/NotificationsContext";

export default function Home() {
  const [search, setSearch] = useState("");
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const { notifications, unreadCount } = useContext(NotificationsContext);

  const quotes = [
    "Consistency beats intensity. Keep coding today, even if just 10 minutes! 💡",
    "Every expert was once a beginner. Start small, stay consistent! 🚀",
    "Don’t watch the clock; do what it does. Keep going! ⏰",
    "Learning is a treasure that will follow its owner everywhere. 🏆",
    "Your limitation—it's only your imagination. Push yourself today! ✨",
    "Small steps every day lead to big results. Keep moving forward! 🐾",
  ];

  // Rotate quotes every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const shortcuts = [
    { name: "📚 Notes", icon: <FaBook size={36} color="#007bff" />, link: "/notes" },
    { name: "📝 Cheat Sheets", icon: <FaClipboardList size={36} color="#28a745" />, link: "/cheatsheets" },
    { name: "🎯 Practice", icon: <FaBullseye size={36} color="#ffc107" />, link: "/practice" },
    { name: "📜 Certificates", icon: <FaGraduationCap size={36} color="#6610f2" />, link: "/certificates" },
    { 
      name: "🔔 Notifications", 
      icon: (
        <div style={{ position: "relative" }}>
          <FaBell size={36} color="#fd7e14" />
          {unreadCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "0.7rem",
                fontWeight: "bold",
              }}
            >
              {unreadCount}
            </span>
          )}
        </div>
      ),
      link: "/notifications",
    },
    { name: "🛠 Tools", icon: <FaTools size={36} color="#17a2b8" />, link: "/tools" },
    { name: "👥 Community", icon: <FaUsers size={36} color="#6f42c1" />, link: "/community" },
    { name: "📂 Roadmaps", icon: <FaFileAlt size={36} color="#20c997" />, link: "/roadmaps" },
    { name: "💼 Jobs", icon: <FaBriefcase size={36} color="#fd7e14" />, link: "/jobs" },
    { name: "👤 Profile", icon: <FaUserCircle size={36} color="#007bff" />, link: "/profile" },
    { name: "💻 Projects", icon: <FaCode size={36} color="#6610f2" />, link: "/projects" },
    { name: "📝 Interview", icon: <FaBullseye size={36} color="#ffc107" />, link: "/interview" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Top Section */}
      <div style={{ background: "linear-gradient(135deg, #28a745, #20c997)", color: "white", padding: "60px 20px", textAlign: "center", borderRadius: "0 0 30px 30px", marginBottom: "40px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Welcome back👋</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Ready to learn something new today?</p>
        <Form className="d-flex justify-content-center flex-wrap" style={{ gap: "10px" }}>
          <Form.Control type="text" placeholder="Search notes, cheat sheets, or practice..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ maxWidth: "500px", minWidth: "250px" }} />
          <Button variant="light" style={{ minWidth: "100px" }}>Search</Button>
        </Form>
      </div>

      <Container>
        {/* Rotating Daily Tip */}
        <Card className="mb-4 shadow-sm" style={{ borderRadius: "15px", backgroundColor: "white" }}>
          <Card.Body className="text-center">
            <h5 style={{ fontWeight: "600" }}>💬 Daily Tip</h5>
            <p style={{ fontSize: "1rem", marginTop: "10px" }}>{quotes[currentQuoteIndex]}</p>
          </Card.Body>
        </Card>

        {/* Shortcuts Grid */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {shortcuts.map((item, idx) => (
            <Col key={idx}>
              <Card
                className="text-center h-100 shadow-sm"
                style={{ cursor: "pointer", borderRadius: "15px", transition: "all 0.3s ease", backgroundColor: "white" }}
                onClick={() => (window.location.href = item.link)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"; }}
              >
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3">{item.icon}</div>
                  <Card.Title style={{ fontSize: "1.1rem", fontWeight: "600" }}>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
