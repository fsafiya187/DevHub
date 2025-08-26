import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { db } from "./firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

// Import pages
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import Cheatsheets from "./pages/Cheatsheets";
import Notes from "./pages/Notes";
import Practice from "./pages/Practice";
import Roadmaps from "./pages/Roadmaps";
import Projects from "./pages/Projects";
import Jobs from "./pages/Jobs";
import Interview from "./pages/Interview";
import Tools from "./pages/Tools";
import Profile from "./pages/Profile";
import NotificationPage from "./pages/NotificationPage"; // ✅ fixed import
import Community from "./pages/Community";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const { user, logout } = useContext(AuthContext);
  const [unreadCount, setUnreadCount] = useState(0);

  // Real-time unread notifications count
  useEffect(() => {
    if (!user) {
      setUnreadCount(0);
      return;
    }

    const q = query(
      collection(db, "notifications"),
      where("userId", "==", user.uid),
      where("read", "==", false)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUnreadCount(snapshot.size);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">🌐 DevHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/certificates">Certificates</Nav.Link>
              <Nav.Link as={Link} to="/cheatsheets">Cheatsheets</Nav.Link>
              <Nav.Link as={Link} to="/notes">Notes</Nav.Link>
              <Nav.Link as={Link} to="/practice">Practice</Nav.Link>
              <Nav.Link as={Link} to="/roadmaps">Roadmaps</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
              <Nav.Link as={Link} to="/interview">Interview</Nav.Link>
              <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
              <Nav.Link as={Link} to="/community">Community</Nav.Link>
              <Nav.Link as={Link} to="/notifications">
                Notifications{" "}
                {unreadCount > 0 && <Badge bg="danger">{unreadCount}</Badge>}
              </Nav.Link>
            </Nav>

            {user ? (
              <Nav>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/cheatsheets" element={<Cheatsheets />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
