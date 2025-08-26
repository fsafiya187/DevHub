// src/pages/Notes.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

function Notes() {
  const [search, setSearch] = useState("");

  // 30+ professional topics
  const categories = [
    {
      name: "Frontend",
      notes: [
        {
          title: "HTML Basics",
          content: `HTML structures web pages using tags. Semantic tags improve SEO & accessibility.`,
          examples: `<h1>Hello World</h1>\n<p>Paragraph example</p>`,
          keyConcepts: ["Elements", "Attributes", "Forms", "Tables", "Links", "Images"],
          resources: [
            { name: "MDN HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { name: "W3Schools HTML", link: "https://www.w3schools.com/html/" }
          ]
        },
        {
          title: "CSS Basics",
          content: `CSS styles HTML elements. Learn selectors, box-model, flexbox, grid, and animations.`,
          examples: `body { font-family: Arial; background: #f0f0f0; }\nh1 { color: #333; }`,
          keyConcepts: ["Selectors", "Box Model", "Flexbox", "Grid", "Animations", "Media Queries"],
          resources: [
            { name: "MDN CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { name: "CSS Tricks", link: "https://css-tricks.com/" }
          ]
        },
        {
          title: "JavaScript Basics",
          content: `JS adds interactivity. Understand variables, functions, DOM, events, ES6+, async/await.`,
          examples: `console.log("Hello World");\nfunction add(a,b){return a+b;}`,
          keyConcepts: ["Variables", "Functions", "DOM", "Events", "ES6+", "Async/Await"],
          resources: [
            { name: "MDN JS", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "JavaScript Info", link: "https://javascript.info/" }
          ]
        },
        {
          title: "React Basics",
          content: `React builds UI components. Learn JSX, state, props, hooks, lifecycle methods.`,
          examples: `import React from 'react';\nfunction App(){return <h1>Hello React</h1>;}`,
          keyConcepts: ["JSX", "Components", "Props", "State", "Hooks", "Lifecycle"],
          resources: [
            { name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" }
          ]
        },
        {
          title: "Bootstrap",
          content: `CSS framework for responsive designs. Components: Navbar, Buttons, Cards, Modals, Forms.`,
          examples: `<button className="btn btn-primary">Click me</button>`,
          keyConcepts: ["Grid", "Components", "Utilities", "Responsive Design"],
          resources: [
            { name: "Bootstrap Docs", link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/" }
          ]
        },
        {
          title: "Tailwind CSS",
          content: `Utility-first CSS framework. Style elements by adding classes directly.`,
          examples: `<div className="bg-blue-500 text-white p-4 rounded">Hello Tailwind</div>`,
          keyConcepts: ["Utility Classes", "Responsive", "Hover/Focus States", "Flex/Grid"],
          resources: [
            { name: "Tailwind Docs", link: "https://tailwindcss.com/docs" }
          ]
        },
      ],
    },
    {
      name: "Backend",
      notes: [
        {
          title: "Node.js",
          content: `JS runtime for backend. Build servers, APIs, file operations, and use NPM packages.`,
          examples: `const http = require('http');\nhttp.createServer((req,res)=>res.end('Hello')).listen(3000);`,
          keyConcepts: ["Modules", "HTTP", "Express.js", "NPM", "Async"],
          resources: [
            { name: "Node Docs", link: "https://nodejs.org/en/docs/" }
          ]
        },
        {
          title: "Python",
          content: `High-level general-purpose language. Great for AI, ML, web, automation, and scripting.`,
          examples: `print("Hello World")\ndef add(a,b): return a+b`,
          keyConcepts: ["Variables", "Loops", "Functions", "OOP", "Libraries: pandas, numpy"],
          resources: [
            { name: "Python Docs", link: "https://docs.python.org/3/" }
          ]
        },
        {
          title: "Java",
          content: `OOP language. Used for enterprise, Android, backend. Understand classes, objects, inheritance.`,
          examples: `public class Main{ public static void main(String[] args){ System.out.println("Hello"); } }`,
          keyConcepts: ["Classes", "Objects", "Inheritance", "Interfaces", "Collections"],
          resources: [
            { name: "Java Docs", link: "https://docs.oracle.com/en/java/" }
          ]
        },
        {
          title: "C++",
          content: `High-performance language for system software. Supports OOP, pointers, and STL.`,
          examples: `#include<iostream>\nusing namespace std;\nint main(){ cout<<"Hello"; return 0; }`,
          keyConcepts: ["Variables", "Pointers", "OOP", "STL", "Memory Management"],
          resources: [
            { name: "C++ Docs", link: "https://cplusplus.com/doc/" }
          ]
        },
        {
          title: "PHP",
          content: `Server-side scripting language. Used for web development and dynamic pages.`,
          examples: `<?php echo "Hello World"; ?>`,
          keyConcepts: ["Variables", "Arrays", "Functions", "Sessions", "Database Integration"],
          resources: [
            { name: "PHP Docs", link: "https://www.php.net/docs.php" }
          ]
        },
      ],
    },
    {
      name: "Database",
      notes: [
        {
          title: "SQL",
          content: `Language for relational DBs. CRUD operations, joins, indexing, normalization.`,
          examples: `SELECT * FROM users;\nINSERT INTO users(name, age) VALUES('Alice',25);`,
          keyConcepts: ["SELECT", "INSERT", "UPDATE", "DELETE", "Joins", "Indexes"],
          resources: [
            { name: "W3Schools SQL", link: "https://www.w3schools.com/sql/" }
          ]
        },
        {
          title: "MongoDB",
          content: `NoSQL document database. Stores JSON-like data, flexible schema.`,
          examples: `db.users.insert({name:"Alice", age:25})`,
          keyConcepts: ["Collections", "Documents", "CRUD", "Indexes", "Aggregation"],
          resources: [
            { name: "MongoDB Docs", link: "https://docs.mongodb.com/" }
          ]
        },
        {
          title: "Firebase",
          content: `Cloud-based backend platform with database, auth, hosting, and storage.`,
          examples: `firebase.firestore().collection("users").add({name:"Alice"});`,
          keyConcepts: ["Realtime DB", "Firestore", "Auth", "Hosting", "Storage"],
          resources: [
            { name: "Firebase Docs", link: "https://firebase.google.com/docs" }
          ]
        },
      ],
    },
    {
      name: "AI/ML",
      notes: [
        {
          title: "Machine Learning",
          content: `Algorithms learn patterns from data. Supervised, unsupervised, regression, classification, libraries: scikit-learn, TensorFlow.`,
          examples: `from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)`,
          keyConcepts: ["Supervised", "Unsupervised", "Regression", "Classification", "Libraries"],
          resources: [
            { name: "Scikit-learn", link: "https://scikit-learn.org/" }
          ]
        },
        {
          title: "Deep Learning",
          content: `Neural networks with multiple layers. Popular frameworks: TensorFlow, PyTorch.`,
          examples: `import tensorflow as tf\nmodel = tf.keras.Sequential()`,
          keyConcepts: ["Neural Networks", "CNN", "RNN", "Backpropagation", "Frameworks"],
          resources: [
            { name: "TensorFlow", link: "https://www.tensorflow.org/" }
          ]
        },
        {
          title: "NLP Basics",
          content: `Natural Language Processing for text data. Includes tokenization, sentiment analysis, embeddings.`,
          examples: `from nltk.tokenize import word_tokenize\ntokens = word_tokenize("Hello World")`,
          keyConcepts: ["Tokenization", "POS Tagging", "Sentiment Analysis", "Embeddings", "Libraries: NLTK, SpaCy"],
          resources: [
            { name: "NLTK Docs", link: "https://www.nltk.org/" }
          ]
        },
      ],
    },
    {
      name: "Tools & Others",
      notes: [
        {
          title: "Git Basics",
          content: `Version control system. Track changes, manage branches, collaborate.`,
          examples: `git init\ngit add .\ngit commit -m "Init"\ngit push origin main`,
          keyConcepts: ["Repos", "Branches", "Commits", "Merge", "Pull Requests"],
          resources: [
            { name: "Git Docs", link: "https://git-scm.com/doc" }
          ]
        },
        {
          title: "Docker",
          content: `Containerization platform. Package apps with dependencies for consistency.`,
          examples: `docker build -t myapp .\ndocker run -p 3000:3000 myapp`,
          keyConcepts: ["Images", "Containers", "Volumes", "Networking", "Docker Compose"],
          resources: [
            { name: "Docker Docs", link: "https://docs.docker.com/" }
          ]
        },
        {
          title: "VSCode",
          content: `Popular code editor. Supports extensions, debugging, and integrated terminal.`,
          examples: `Install extensions like ESLint, Prettier, Python, Live Server`,
          keyConcepts: ["Extensions", "Debugging", "Shortcuts", "Themes", "Integrated Terminal"],
          resources: [
            { name: "VSCode Docs", link: "https://code.visualstudio.com/docs" }
          ]
        },
        {
          title: "Linux Basics",
          content: `Command-line OS. Learn file commands, permissions, process management, and shell scripting.`,
          examples: `ls -la\nchmod +x script.sh\nps aux`,
          keyConcepts: ["File System", "Permissions", "Processes", "Shell Scripting", "Package Managers"],
          resources: [
            { name: "Linux Docs", link: "https://www.kernel.org/doc/html/latest/" }
          ]
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      notes: cat.notes.filter(
        (n) =>
          n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.notes.length > 0);

  // ✅ Updated to save locally + in Firestore if logged in
  const bookmarkNote = async (note) => {
    try {
      // ---- LocalStorage ----
      let bookmarks = JSON.parse(localStorage.getItem("bookmarkedNotes")) || [];
      if (!bookmarks.find((n) => n.title === note.title)) {
        bookmarks.push(note);
        localStorage.setItem("bookmarkedNotes", JSON.stringify(bookmarks));
      }

      // ---- Firestore (if logged in) ----
      if (user) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, { bookmarks: [] }, { merge: true }); // ensure doc exists
        await updateDoc(userRef, {
          bookmarks: arrayUnion(note),
        });
        alert("Note saved to your profile!");
      } else {
        alert("Note bookmarked locally. Login to save in your profile.");
      }
    } catch (err) {
      console.error("Error bookmarking:", err);
      alert("Failed to bookmark note.");
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">📚 Notes</h1>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Accordion defaultActiveKey="0">
        {filteredCategories.map((cat, i) => (
          <Accordion.Item eventKey={i.toString()} key={i}>
            <Accordion.Header>{cat.name}</Accordion.Header>
            <Accordion.Body>
              <Row>
                {cat.notes.map((n, idx) => (
                  <Col key={idx} md={6} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body>
                        <Card.Title>{n.title}</Card.Title>
                        <Card.Text>{n.content}</Card.Text>
                        {n.examples && (
                          <pre
                            style={{
                              background: "#f8f9fa",
                              padding: "10px",
                              borderRadius: "5px",
                              overflowX: "auto",
                            }}
                          >
                            {n.examples}
                          </pre>
                        )}
                        <div className="mb-2">
                          <Button
                            variant="warning"
                            size="sm"
                            onClick={() => bookmarkNote(n)}
                          >
                            Bookmark
                          </Button>
                        </div>
                        {n.resources.map((r, k) => (
                          <Button
                            key={k}
                            variant="primary"
                            size="sm"
                            href={r.link}
                            target="_blank"
                            className="me-2 mb-2"
                          >
                            {r.name}
                          </Button>
                        ))}
                        <ul>
                          {n.keyConcepts &&
                            n.keyConcepts.map((c, k) => <li key={k}>{c}</li>)}
                        </ul>
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

export default Notes;