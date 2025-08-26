// src/pages/Cheatsheets.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";

function Cheatsheets() {
  const [search, setSearch] = useState("");

  const categories = [
    {
      name: "Frontend",
      topics: [
        { name: "HTML", description: "Markup language for web pages.", basics: "<!DOCTYPE html>...\n", keyConcepts: ["Elements", "Attributes", "Forms"], resources: [{ name: "MDN HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" }] },
        { name: "CSS", description: "Styling language for web pages.", basics: "body { ... }", keyConcepts: ["Selectors", "Flexbox", "Grid"], resources: [{ name: "MDN CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" }] },
        { name: "JavaScript", description: "Programming language for web interactivity.", basics: "console.log('Hello');", keyConcepts: ["Variables", "Functions", "ES6+"], resources: [{ name: "MDN JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }] },
        { name: "React", description: "UI component library.", basics: "function App() {...}", keyConcepts: ["Components", "Hooks", "JSX"], resources: [{ name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" }] },
        { name: "Vue.js", description: "Progressive JS framework.", basics: "const app = Vue.createApp({...})", keyConcepts: ["Components", "Directives"], resources: [{ name: "Vue Docs", link: "https://vuejs.org/guide/introduction.html" }] },
        { name: "Angular", description: "TypeScript-based front-end framework.", basics: "ng new app", keyConcepts: ["Modules", "Components", "Services"], resources: [{ name: "Angular Docs", link: "https://angular.io/docs" }] },
      ],
    },
    {
      name: "Backend",
      topics: [
        { name: "Node.js", description: "JS runtime for server-side apps.", basics: "const http = require('http');", keyConcepts: ["Modules", "Express.js"], resources: [{ name: "Node Docs", link: "https://nodejs.org/en/docs/" }] },
        { name: "Express.js", description: "Minimal Node.js web framework.", basics: "const app = express();", keyConcepts: ["Routing", "Middleware"], resources: [{ name: "Express Docs", link: "https://expressjs.com/" }] },
        { name: "Python", description: "General-purpose programming language.", basics: "print('Hello')", keyConcepts: ["Variables", "OOP"], resources: [{ name: "Python Docs", link: "https://docs.python.org/3/" }] },
        { name: "Django", description: "Python web framework.", basics: "django-admin startproject mysite", keyConcepts: ["Models", "Views", "Templates"], resources: [{ name: "Django Docs", link: "https://docs.djangoproject.com/" }] },
        { name: "Flask", description: "Micro web framework for Python.", basics: "from flask import Flask", keyConcepts: ["Routing", "Templates"], resources: [{ name: "Flask Docs", link: "https://flask.palletsprojects.com/" }] },
        { name: "Java", description: "Backend programming language.", basics: "public class Main {...}", keyConcepts: ["OOP", "Servlets"], resources: [{ name: "Java Docs", link: "https://docs.oracle.com/en/java/" }] },
        { name: "Spring Boot", description: "Java framework for backend apps.", basics: "@SpringBootApplication", keyConcepts: ["REST APIs", "Beans"], resources: [{ name: "Spring Docs", link: "https://spring.io/projects/spring-boot" }] },
      ],
    },
    {
      name: "Programming Languages",
      topics: [
        { name: "C", description: "Procedural programming language.", basics: "#include <stdio.h>", keyConcepts: ["Pointers", "Arrays"], resources: [{ name: "C Docs", link: "https://www.learn-c.org/" }] },
        { name: "C++", description: "Object-oriented programming language.", basics: "#include <iostream>", keyConcepts: ["STL", "OOP"], resources: [{ name: "C++ Docs", link: "https://cplusplus.com/doc/" }] },
        { name: "JavaScript", description: "Frontend & backend scripting language.", basics: "console.log('Hello');", keyConcepts: ["ES6+", "DOM"], resources: [{ name: "MDN JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }] },
        { name: "TypeScript", description: "Typed superset of JavaScript.", basics: "let x: number = 5;", keyConcepts: ["Types", "Interfaces"], resources: [{ name: "TS Docs", link: "https://www.typescriptlang.org/docs/" }] },
        { name: "Python", description: "General-purpose programming language.", basics: "print('Hello')", keyConcepts: ["OOP", "Modules"], resources: [{ name: "Python Docs", link: "https://docs.python.org/3/" }] },
        { name: "Go", description: "Compiled language by Google.", basics: "fmt.Println('Hello')", keyConcepts: ["Goroutines", "Channels"], resources: [{ name: "Go Docs", link: "https://golang.org/doc/" }] },
        { name: "Rust", description: "Memory-safe systems programming.", basics: "fn main() { println!(\"Hello\"); }", keyConcepts: ["Ownership", "Borrowing"], resources: [{ name: "Rust Docs", link: "https://www.rust-lang.org/learn" }] },
      ],
    },
    {
      name: "Database",
      topics: [
        { name: "SQL", description: "Structured Query Language.", basics: "SELECT * FROM users;", keyConcepts: ["SELECT", "JOIN"], resources: [{ name: "W3Schools SQL", link: "https://www.w3schools.com/sql/" }] },
        { name: "MongoDB", description: "NoSQL database.", basics: "db.collection.find()", keyConcepts: ["Collections", "Documents"], resources: [{ name: "Mongo Docs", link: "https://docs.mongodb.com/" }] },
        { name: "PostgreSQL", description: "Relational database system.", basics: "CREATE TABLE users (...);", keyConcepts: ["Tables", "Joins"], resources: [{ name: "Postgres Docs", link: "https://www.postgresql.org/docs/" }] },
        { name: "Firebase", description: "Backend-as-a-Service DB.", basics: "firebase.database().ref()", keyConcepts: ["Realtime DB", "Firestore"], resources: [{ name: "Firebase Docs", link: "https://firebase.google.com/docs" }] },
      ],
    },
    {
      name: "AI/ML",
      topics: [
        { name: "Machine Learning", description: "Algorithms that learn from data.", basics: "from sklearn.linear_model import LinearRegression", keyConcepts: ["Regression", "Classification"], resources: [{ name: "Scikit-learn", link: "https://scikit-learn.org/" }] },
        { name: "Deep Learning", description: "Neural networks for learning.", basics: "import tensorflow as tf", keyConcepts: ["Neurons", "Layers"], resources: [{ name: "TensorFlow", link: "https://www.tensorflow.org/" }] },
        { name: "NLP", description: "Natural Language Processing.", basics: "from nltk.tokenize import word_tokenize", keyConcepts: ["Tokenization", "Embeddings"], resources: [{ name: "NLTK Docs", link: "https://www.nltk.org/" }] },
      ],
    },
    {
      name: "Tools",
      topics: [
        { name: "Git", description: "Version control system.", basics: "git init ...", keyConcepts: ["Branches", "Commits"], resources: [{ name: "Git Docs", link: "https://git-scm.com/doc" }] },
        { name: "Docker", description: "Containerization platform.", basics: "docker build .", keyConcepts: ["Containers", "Images"], resources: [{ name: "Docker Docs", link: "https://docs.docker.com/" }] },
        { name: "VS Code", description: "Code editor.", basics: "Open project and start coding", keyConcepts: ["Extensions", "Shortcuts"], resources: [{ name: "VS Code Docs", link: "https://code.visualstudio.com/docs" }] },
      ],
    },
  ];

  const filteredCategories = categories.map(cat => ({
    ...cat,
    topics: cat.topics.filter(
      t => t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.topics.length > 0);

  const copyToClipboard = (text) => { navigator.clipboard.writeText(text); alert("Code copied!"); };
  const downloadSnippet = (text, name) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = `${name}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">📝 Cheatsheets</h1>
      <Form className="mb-4">
        <Form.Control type="text" placeholder="Search topics..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </Form>
      <Accordion defaultActiveKey="0">
        {filteredCategories.map((cat, i) => (
          <Accordion.Item eventKey={i.toString()} key={i}>
            <Accordion.Header>{cat.name}</Accordion.Header>
            <Accordion.Body>
              <Row>
                {cat.topics.map((t, idx) => (
                  <Col key={idx} md={6} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body>
                        <Card.Title>{t.name}</Card.Title>
                        <Card.Text>{t.description}</Card.Text>
                        <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "5px", overflowX: "auto" }}>{t.basics}</pre>
                        <div className="mb-2">
                          <Button variant="success" size="sm" className="me-2" onClick={() => copyToClipboard(t.basics)}>Copy</Button>
                          <Button variant="info" size="sm" onClick={() => downloadSnippet(t.basics, t.name)}>Download</Button>
                        </div>
                        <ul>
                          {t.keyConcepts.map((c, k) => <li key={k}>{c}</li>)}
                        </ul>
                        {t.resources.map((r, k) => (
                          <Button key={k} variant="primary" size="sm" href={r.link} target="_blank" className="me-2 mb-2">{r.name}</Button>
                        ))}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default Cheatsheets;
