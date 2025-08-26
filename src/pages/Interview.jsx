// InterviewPrep.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaUserTie, FaCode, FaClipboardList, FaBriefcase,
  FaLaptopCode, FaServer, FaChalkboardTeacher,
  FaBrain, FaComments
} from "react-icons/fa";

function InterviewPrep() {
  const sections = [
    {
      title: "🤝 HR Interview Questions",
      points: [
        { text: "Tell me about yourself." },
        { text: "Why should we hire you?" },
        { text: "What are your strengths and weaknesses?" },
        { text: "Where do you see yourself in 5 years?" },
        { text: "Tell me about a challenge you faced and how you handled it." }
      ],
      icon: <FaUserTie size={32} color="#007bff" />,
      color: "primary"
    },
    {
      title: "💻 Technical Interview Questions",
      points: [
        { text: "Explain OOP concepts with examples." },
        { text: "What is the difference between SQL and NoSQL?" },
        { text: "Explain time & space complexity with examples." },
        { text: "What happens in memory when you create an object in Java?" },
        { text: "Explain REST API vs GraphQL." }
      ],
      icon: <FaBriefcase size={32} color="#6610f2" />,
      color: "info"
    },
    {
      title: "🧮 Coding Round Practice",
      points: [
        { text: "DSA: Arrays, Strings, Recursion, Dynamic Programming, Graphs." },
        { text: "SQL: Joins, Subqueries, Window Functions, Indexing." },
        { text: "OOP: Classes, Inheritance, Polymorphism, Interfaces." },
        { text: "System Design: Scalability, Load Balancing, Caching." },
        { link: "https://leetcode.com", text: "LeetCode (DSA Practice)" },
        { link: "https://www.hackerrank.com", text: "HackerRank (SQL, DSA, AI)" },
        { link: "https://codeforces.com", text: "Codeforces (Competitive Programming)" },
        { link: "https://www.codewars.com", text: "Codewars (Coding Challenges)" },
        { link: "https://www.topcoder.com", text: "TopCoder (Contests)" }
      ],
      icon: <FaCode size={32} color="#28a745" />,
      color: "success"
    },
    {
      title: "🗂 Resume & Portfolio Tips",
      points: [
        { text: "Keep it one page, highlight measurable achievements." },
        { text: "Showcase 2-3 strong projects with GitHub links." },
        { text: "Add internships, certifications, and hackathons." },
        { text: "Keep LinkedIn & GitHub profiles updated." },
        { text: "Customize resume per job role." },
        { link: "https://www.canva.com/resumes/templates/", text: "Use Canva Resume Templates" },
        { link: "https://linkedin.com", text: "Keep LinkedIn updated" },
        { link: "https://github.com", text: "Maintain GitHub Portfolio" }
      ],
      icon: <FaClipboardList size={32} color="#fd7e14" />,
      color: "warning"
    },
    {
      title: "📚 Technical Subjects",
      points: [
        { text: "Revise core Java/C++/Python & OOPs." },
        { text: "Exception handling & collections." },
        { text: "Web dev basics (HTML, CSS, JS, React)." },
        { text: "Cloud (AWS/Azure/GCP) & DevOps tools." },
        { link: "https://www.geeksforgeeks.org/system-design-tutorial/", text: "System Design Basics" }
      ],
      icon: <FaLaptopCode size={32} color="#28a745" />,
      color: "secondary"
    },
    {
      title: "⚙️ System Design",
      points: [
        { text: "Databases: SQL vs NoSQL." },
        { text: "Caching: Redis / Memcached." },
        { text: "Message queues: Kafka / RabbitMQ." },
        { text: "Case studies: Netflix, Swiggy, Exam Portals." }
      ],
      icon: <FaServer size={32} color="#fd7e14" />,
      color: "danger"
    },
    {
      title: "🎯 Mock Interviews",
      points: [
        { text: "Practice with peers or mentors." },
        { text: "Gainlo, Karat, Educative.io." },
        { text: "Interviewing.io for live mock tests." },
        { text: "Focus on feedback & improvements." },
        { link: "https://interviewing.io", text: "Interviewing.io" },
        { link: "https://karat.com", text: "Karat" },
        { link: "https://www.pramp.com", text: "Pramp (Free Mock Interviews)" },
        { link: "https://www.educative.io", text: "Educative.io" }
      ],
      icon: <FaChalkboardTeacher size={32} color="#6f42c1" />,
      color: "info"
    },
    {
      title: "🧠 Aptitude & Soft Skills",
      points: [
        { text: "Quantitative aptitude & logical reasoning." },
        { text: "Improve communication skills." },
        { text: "Showcase leadership & teamwork." },
        { text: "Practice presentations & GDs." },
        { link: "https://www.indiabix.com/aptitude/questions-and-answers/", text: "Practice on IndiaBix" }
      ],
      icon: <FaBrain size={32} color="#e83e8c" />,
      color: "success"
    },
    {
      title: "💡 Stay Confident & Updated",
      points: [
        { text: "Keep track of interview trends." },
        { text: "Stay updated with industry news." },
        { text: "Practice mindfulness & stress control." },
        { text: "Be confident during interviews." },
        { link: "https://news.ycombinator.com/", text: "Hacker News" },
        { link: "https://medium.com", text: "Medium (Tech Blogs)" }
      ],
      icon: <FaComments size={32} color="#17a2b8" />,
      color: "primary"
    }
  ];

  const motivationalQuotes = [
    "“The best way to predict the future is to create it.” – Peter Drucker",
    "“Success is where preparation and opportunity meet.” – Bobby Unser",
    "“Confidence comes from discipline and training.” – Robert Kiyosaki",
    "“Don’t watch the clock; do what it does. Keep going.” – Sam Levenson",
    "“The harder you work for something, the greater you’ll feel when you achieve it.”",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill",
    "“Your time is limited, don’t waste it living someone else’s life.” – Steve Jobs",
    "“Opportunities don’t happen. You create them.” – Chris Grosser"
  ];

  // State for rotating quotes
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationalQuotes.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">
        🚀 Interview Preparation Guide
      </h2>
      <Row>
        {sections.map((s, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card className={`h-100 shadow-sm border-${s.color}`} style={{ borderWidth: "2px" }}>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  {s.icon}
                  <h5 className="ms-2 mb-0 fw-bold text-capitalize">{s.title}</h5>
                </div>
                <ul>
                  {s.points.map((p, i) => (
                    <li key={i} style={{ marginBottom: "6px" }}>
                      {p.link ? (
                        <a 
                          href={p.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ color: "#007bff", textDecoration: "none" }}
                          onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                          onMouseOut={(e) => e.target.style.textDecoration = "none"}
                        >
                          {p.text}
                        </a>
                      ) : (
                        p.text
                      )}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Rotating Motivational Quote */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm text-center">
        <h4 className="fw-bold text-success mb-3">🌟 Motivational Quote</h4>
        <p style={{ fontStyle: "italic", fontSize: "18px", color: "#444" }}>
          {motivationalQuotes[quoteIndex]}
        </p>
      </div>
    </Container>
  );
}

export default InterviewPrep;
