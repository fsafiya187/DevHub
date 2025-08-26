import React, { useContext } from "react";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserDataContext } from "../context/UserDataContext";

export default function AppNavbar() {
  const { user, logout } = useContext(AuthContext);
  const { data, setTheme } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">DevHub</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            <Button
              size="sm"
              variant={data.theme === "dark" ? "secondary" : "outline-secondary"}
              onClick={() => setTheme(data.theme === "dark" ? "light" : "dark")}
            >
              {data.theme === "dark" ? "Dark" : "Light"} Mode
            </Button>

            {user ? (
              <>
                <Badge bg="primary">{user.username}</Badge>
                <Button size="sm" variant="outline-danger" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button size="sm" as={Link} to="/login" variant="primary">Login</Button>
                <Button size="sm" as={Link} to="/signup" variant="outline-primary">Sign Up</Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
