// src/layout/Layout.jsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            🌐 DevHub
          </Navbar.Brand>
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
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page content goes here */}
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
