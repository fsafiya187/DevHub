// ToolsResources.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCodeBranch,
  FaCogs,
  FaGlobe,
  FaPuzzlePiece,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaLightbulb
} from "react-icons/fa";

function ToolsResources() {
  const resources = [
    {
      title: "🛠 VS Code Extensions",
      icon: <FaPuzzlePiece size={30} color="#007bff" />,
      items: [
        { text: "Prettier – Code formatter" },
        { text: "ES7+ React/Redux snippets" },
        { text: "Debugger for Chrome" },
        { text: "Live Server (for HTML projects)" },
        { text: "GitLens – Git supercharged" },
        { text: "REST Client – Test APIs directly" },
        { text: "Better Comments – Highlight TODO/FIXME" },
        { text: "Auto Rename Tag – Auto update paired tags" },
        { text: "Path Intellisense – Smart path completion" },
        { text: "Material Icon Theme – Beautiful file icons" }
      ]
    },
    {
      title: "🌐 Free APIs for Practice",
      icon: <FaGlobe size={30} color="#28a745" />,
      items: [
        { text: "JSONPlaceholder – Fake REST API", link: "https://jsonplaceholder.typicode.com" },
        { text: "ReqRes – API for testing", link: "https://reqres.in" },
        { text: "OpenWeatherMap – Weather data", link: "https://openweathermap.org/api" },
        { text: "NewsAPI – Global news", link: "https://newsapi.org" },
        { text: "PokéAPI – Pokémon database", link: "https://pokeapi.co" },
        { text: "REST Countries – Country data", link: "https://restcountries.com" },
        { text: "GitHub API – Developer data", link: "https://docs.github.com/en/rest" },
        { text: "NASA API – Space & astronomy", link: "https://api.nasa.gov" },
        { text: "Dog CEO – Random dog pics", link: "https://dog.ceo/dog-api" },
        { text: "JokeAPI – Programming jokes", link: "https://jokeapi.dev" }
      ]
    },
    {
      title: "📂 Useful GitHub Repositories",
      icon: <FaCodeBranch size={30} color="#fd7e14" />,
      items: [
        { text: "awesome (curated dev resources)", link: "https://github.com/sindresorhus/awesome" },
        { text: "free-programming-books", link: "https://github.com/EbookFoundation/free-programming-books" },
        { text: "developer-roadmap", link: "https://github.com/kamranahmedse/developer-roadmap" },
        { text: "project-based-learning", link: "https://github.com/practical-tutorials/project-based-learning" },
        { text: "public-apis", link: "https://github.com/public-apis/public-apis" },
        { text: "system-design-primer", link: "https://github.com/donnemartin/system-design-primer" },
        { text: "build-your-own-x", link: "https://github.com/codecrafters-io/build-your-own-x" },
        { text: "CS Notes – Interview prep", link: "https://github.com/CyC2018/CS-Notes" }
      ]
    },
    {
      title: "🌍 Useful Websites",
      icon: <FaCogs size={30} color="#6f42c1" />,
      items: [
        { text: "GeeksforGeeks – CS concepts", link: "https://www.geeksforgeeks.org" },
        { text: "W3Schools – Quick tutorials", link: "https://www.w3schools.com" },
        { text: "MDN Web Docs – Web dev reference", link: "https://developer.mozilla.org" },
        { text: "freeCodeCamp – Coding practice", link: "https://www.freecodecamp.org" },
        { text: "DevDocs – API documentation", link: "https://devdocs.io" },
        { text: "Exercism – Practice coding", link: "https://exercism.org" },
        { text: "Frontend Mentor – UI challenges", link: "https://www.frontendmentor.io" },
        { text: "LeetCode – DSA practice", link: "https://leetcode.com" },
        { text: "HackerRank – Coding challenges", link: "https://www.hackerrank.com" },
        { text: "CodePen – Frontend playground", link: "https://codepen.io" },
        { text: "Canva – Design & resumes", link: "https://www.canva.com" }
      ]
    },
    {
      title: "💻 Online IDEs & Platforms",
      icon: <FaLaptopCode size={30} color="#17a2b8" />,
      items: [
        { text: "Replit – Online IDE", link: "https://replit.com" },
        { text: "CodeSandbox – React & web apps", link: "https://codesandbox.io" },
        { text: "Glitch – Build & share web apps", link: "https://glitch.com" },
        { text: "StackBlitz – Instant dev environment", link: "https://stackblitz.com" },
        { text: "JSFiddle – Test HTML, CSS, JS", link: "https://jsfiddle.net" }
      ]
    },
    {
      title: "🎨 Design & Productivity Tools",
      icon: <FaPaintBrush size={30} color="#e83e8c" />,
      items: [
        { text: "Figma – UI/UX design", link: "https://www.figma.com" },
        { text: "Dribbble – Design inspiration", link: "https://dribbble.com" },
        { text: "Notion – Notes & projects", link: "https://www.notion.so" },
        { text: "Trello – Task management", link: "https://trello.com" },
        { text: "Miro – Online whiteboard", link: "https://miro.com" }
      ]
    },
    {
      title: "📚 Learning Platforms",
      icon: <FaLightbulb size={30} color="#ffc107" />,
      items: [
        { text: "Coursera – Online courses", link: "https://www.coursera.org" },
        { text: "Udemy – Affordable learning", link: "https://www.udemy.com" },
        { text: "edX – University-level courses", link: "https://www.edx.org" },
        { text: "Pluralsight – Tech skills", link: "https://www.pluralsight.com" },
        { text: "Khan Academy – Free learning", link: "https://www.khanacademy.org" }
      ]
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">
        ⚡ Tools & Resources
      </h2>
      <Row>
        {resources.map((section, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm border-0 custom-card">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  {section.icon}
                  <h5 className="ms-2 mb-0 fw-bold">{section.title}</h5>
                </div>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: "6px" }}>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#007bff", textDecoration: "none" }}
                          onMouseOver={(e) =>
                            (e.target.style.textDecoration = "underline")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.textDecoration = "none")
                          }
                        >
                          {item.text} <FaExternalLinkAlt size={12} />
                        </a>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Extra styling */}
      <style>
        {`
          .custom-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .custom-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </Container>
  );
}

export default ToolsResources;
