// src/pages/Profile.jsx
import React, { useContext, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Form } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { UserDataContext } from "../context/UserDataContext";
import {
  FaMoon,
  FaSun,
  FaTrash,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaEdit,
  FaStickyNote,
  FaLink,
  FaUserCircle,
  FaChartBar,
} from "react-icons/fa";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const {
    data,
    setTheme,
    addNote,
    removeNote,
    savedLinks = [],
    addSavedLink,
    removeSavedLink,
    completeChallenge,
    clearAll,
  } = useContext(UserDataContext);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [searchNote, setSearchNote] = useState("");
  const [searchLink, setSearchLink] = useState("");

  if (!user || !data) return <p>Loading...</p>;

  // Add new note
  const onAddNote = () => {
    if (!noteTitle.trim() || !noteText.trim()) return;
    const newNote = {
      id: Date.now().toString(),
      title: noteTitle.trim(),
      content: noteText.trim(),
      date: new Date().toISOString(),
    };
    addNote(newNote);
    setNoteTitle("");
    setNoteText("");
  };

  // Filter lists
  const filteredNotes = (data.savedNotes || []).filter(
    (n) =>
      n.title.toLowerCase().includes(searchNote.toLowerCase()) ||
      n.content.toLowerCase().includes(searchNote.toLowerCase())
  );
  const filteredLinks = (savedLinks || []).filter((l) =>
    l.title.toLowerCase().includes(searchLink.toLowerCase())
  );

  // Recommendations based on categories
  const recommendations = useMemo(() => {
    const cats = new Set((savedLinks || []).map((l) => l.category));
    const rec = [];
    if (cats.has("AI/ML"))
      rec.push({ title: "Kaggle beginner projects", url: "https://www.kaggle.com/competitions" });
    if (cats.has("Cloud"))
      rec.push({ title: "AWS Free Tier labs", url: "https://aws.amazon.com/training/" });
    if (cats.has("Web"))
      rec.push({ title: "Frontend Mentor challenges", url: "https://www.frontendmentor.io" });
    if (cats.size === 0)
      rec.push({ title: "Explore public APIs", url: "https://github.com/public-apis/public-apis" });
    return rec;
  }, [savedLinks]);

  return (
    <Container className="my-4">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="fw-bold text-primary">
          <FaUserCircle className="me-2" /> {user.username}'s Profile
        </h3>
        <div className="d-flex gap-3 align-items-center">
          <Form.Check
            type="switch"
            id="theme-switch"
            label={data.theme === "dark" ? <FaMoon /> : <FaSun />}
            checked={data.theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <Button variant="outline-danger" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>

      <Row>
        {/* Stats */}
        <Col md={4} className="mb-3">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <h5 className="fw-bold mb-3">
                <FaChartBar className="me-2" />
                Stats
              </h5>
              <p>
                Saved Notes <Badge bg="primary">{(data.savedNotes || []).length}</Badge>
              </p>
              <p>
                Saved Links <Badge bg="success">{(savedLinks || []).length}</Badge>
              </p>
              <p>
                Completed Challenges{" "}
                <Badge bg="warning" text="dark">
                  {(data.completedChallenges || []).length}
                </Badge>
              </p>
              <hr />
              <Button size="sm" variant="outline-danger" onClick={clearAll}>
                <FaTrash className="me-1" /> Clear All
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Saved Links */}
        <Col md={8} className="mb-3">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">
                  <FaLink className="me-2" /> Saved Links
                </h5>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={() =>
                    addSavedLink({
                      title: "LeetCode",
                      url: "https://leetcode.com",
                      category: "Web",
                    })
                  }
                >
                  + Quick Add
                </Button>
              </div>
              <Form.Control
                className="mb-2"
                placeholder="Search links..."
                value={searchLink}
                onChange={(e) => setSearchLink(e.target.value)}
              />
              {filteredLinks.length === 0 ? (
                <p className="text-muted">No links found.</p>
              ) : (
                <ul className="list-unstyled">
                  {filteredLinks.map((l) => (
                    <li
                      key={l.url}
                      className="d-flex justify-content-between align-items-center p-2 border rounded mb-2"
                    >
                      <span>
                        <Badge bg="secondary">{l.category || "General"}</Badge>{" "}
                        <a href={l.url} target="_blank" rel="noreferrer">
                          {l.title} <FaExternalLinkAlt size={12} />
                        </a>
                      </span>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => removeSavedLink(l.url)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Notes */}
        <Col md={6} className="mb-3">
          <Card className="shadow-sm border-0 h-100">
            <Card.Body>
              <h5 className="fw-bold mb-3">
                <FaStickyNote className="me-2" /> Notes
              </h5>
              <input
                className="form-control mb-2"
                placeholder="Note title"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Write your note..."
                rows={3}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
              <Button size="sm" onClick={onAddNote} className="mb-3">
                Save Note
              </Button>
              <Form.Control
                className="mb-3"
                placeholder="Search notes..."
                value={searchNote}
                onChange={(e) => setSearchNote(e.target.value)}
              />
              {filteredNotes.length === 0 ? (
                <p className="text-muted">No notes yet.</p>
              ) : (
                <ul className="list-unstyled">
                  {filteredNotes.map((n) => (
                    <li key={n.id} className="p-2 border rounded mb-2 bg-light">
                      <b>{n.title}</b>{" "}
                      <small className="text-muted">
                        ({new Date(n.date).toLocaleString()})
                      </small>
                      <div>{n.content}</div>
                      <div className="mt-2">
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => removeNote(n.id)}
                        >
                          Delete
                        </Button>
                        <Button size="sm" variant="outline-secondary" className="ms-2">
                          <FaEdit /> Edit
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Challenges + Recommendations */}
        <Col md={6} className="mb-3">
          <Card className="shadow-sm border-0 mb-3">
            <Card.Body>
              <h5 className="fw-bold mb-3">🏁 Completed Challenges</h5>
              <Button
                size="sm"
                variant="outline-success"
                onClick={() =>
                  completeChallenge({
                    id: "array-101",
                    title: "Arrays 101 (LeetCode)",
                  })
                }
              >
                <FaCheckCircle className="me-1" /> Mark Example Completed
              </Button>
              <ul className="list-unstyled mt-3">
                {(data.completedChallenges || []).length === 0 ? (
                  <p className="text-muted">No completed challenges.</p>
                ) : (
                  (data.completedChallenges || []).map((c) => (
                    <li key={c.id} className="mb-2">
                      ✅ {c.title}{" "}
                      <small className="text-muted">
                        ({new Date(c.date).toLocaleDateString()})
                      </small>
                    </li>
                  ))
                )}
              </ul>
            </Card.Body>
          </Card>

          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold mb-3">✨ Recommendations</h5>
              {recommendations.length === 0 ? (
                <p className="text-muted">Start saving links to get recommendations.</p>
              ) : (
                <ul className="list-unstyled">
                  {recommendations.map((r) => (
                    <li key={r.url} className="mb-2">
                      <a href={r.url} target="_blank" rel="noreferrer">
                        {r.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
