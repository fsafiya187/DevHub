// src/pages/InternshipsSteps.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaCheckCircle, FaPaperPlane, FaFileAlt, FaEnvelope, FaLaptopCode, FaCode, FaTrophy } from "react-icons/fa";

function InternshipsSteps() {
  const [search, setSearch] = useState("");

  const steps = [
    { step: "1. Research Opportunities", desc: "Explore curated platforms, hackathons, coding contests, and company career pages to find roles that match your interests.", icon: <FaCheckCircle size={32} color="#007bff" /> },
    { step: "2. Prepare Your Resume & Portfolio", desc: "Update your resume highlighting skills, projects, and achievements. Add a portfolio link showcasing projects or certifications.", icon: <FaFileAlt size={32} color="#6610f2" /> },
    { step: "3. Apply Smartly", desc: "Submit applications on internships/jobs platforms. Tailor your cover letter to the role and company for better chances.", icon: <FaPaperPlane size={32} color="#28a745" /> },
    { step: "4. Follow Up", desc: "Send polite follow-up emails to recruiters if you haven't heard back in 1-2 weeks. Track your applications systematically.", icon: <FaEnvelope size={32} color="#fd7e14" /> },
    { step: "5. Prepare for Interviews", desc: "Practice coding problems, technical questions, and soft skills. Prepare answers for common interview questions and mock interviews.", icon: <FaCheckCircle size={32} color="#20c997" /> },
    { step: "6. Stay Updated", desc: "Enable notifications on platforms for new internships/jobs, and participate in hackathons or contests to gain visibility.", icon: <FaCheckCircle size={32} color="#6f42c1" /> }
  ];

  const opportunities = [
    // Internship Platforms
    { name: "Internshala", desc: "Wide range of internships across India.", link: "https://internshala.com", icon: <FaLaptopCode size={32} color="#ff6f61" /> },
    { name: "LinkedIn Jobs", desc: "Internships & jobs from top companies worldwide.", link: "https://www.linkedin.com/jobs", icon: <FaLaptopCode size={32} color="#0077b5" /> },
    { name: "AngelList", desc: "Internships & jobs at startups worldwide.", link: "https://angel.co/jobs", icon: <FaLaptopCode size={32} color="#00b894" /> },
    { name: "GitHub Jobs", desc: "Tech internships & remote developer jobs.", link: "https://jobs.github.com/", icon: <FaLaptopCode size={32} color="#24292e" /> },
    { name: "Indeed", desc: "Job & internship listings worldwide.", link: "https://www.indeed.com", icon: <FaLaptopCode size={32} color="#ff4500" /> },
    { name: "Glassdoor", desc: "Search internships & jobs with company reviews.", link: "https://www.glassdoor.com/Job/index.htm", icon: <FaLaptopCode size={32} color="#f6c90e" /> },

    // Big Company Internships
  { name: "Amazon Internships", desc: "Global internships at Amazon for various roles.", link: "https://www.amazon.jobs/en/teams/university-recruiting", icon: <FaLaptopCode size={32} color="#ff9900" /> },
  { name: "Google Internships", desc: "Internships and student programs at Google.", link: "https://careers.google.com/students/", icon: <FaLaptopCode size={32} color="#4285f4" /> },
  { name: "Microsoft Internships", desc: "Internship programs at Microsoft worldwide.", link: "https://careers.microsoft.com/students", icon: <FaLaptopCode size={32} color="#0078d7" /> },
  { name: "Facebook/Meta Internships", desc: "Global internships at Meta (Facebook).", link: "https://www.metacareers.com/students-and-grads", icon: <FaLaptopCode size={32} color="#4267B2" /> },
  { name: "Apple Internships", desc: "Student internships at Apple.", link: "https://www.apple.com/careers/students.html", icon: <FaLaptopCode size={32} color="#A2AAAD" /> },
  { name: "Tesla Internships", desc: "Internships at Tesla across engineering and software.", link: "https://www.tesla.com/careers/university-internships", icon: <FaLaptopCode size={32} color="#e82127" /> },
  
    // Coding Contests
    { name: "Codeforces", desc: "Regular competitive programming contests.", link: "https://codeforces.com/contests", icon: <FaCode size={32} color="#1f77b4" /> },
    { name: "LeetCode", desc: "Weekly coding contests for problem-solving skills.", link: "https://leetcode.com/contest/", icon: <FaCode size={32} color="#ffa500" /> },
    { name: "HackerEarth Contests", desc: "Coding contests and hackathons.", link: "https://www.hackerearth.com/challenges/", icon: <FaCode size={32} color="#6c5ce7" /> },
    { name: "TopCoder", desc: "Global coding challenges & hackathons.", link: "https://www.topcoder.com/challenges", icon: <FaCode size={32} color="#6a1b9a" /> },

    // Hackathons & Competitions
    { name: "Devfolio Hackathons", desc: "Participate in hackathons hosted by universities & companies.", link: "https://devfolio.co/hackathons", icon: <FaTrophy size={32} color="#fd7e14" /> },
    { name: "Kaggle Competitions", desc: "Data science competitions with prizes.", link: "https://www.kaggle.com/competitions", icon: <FaTrophy size={32} color="#20c997" /> },
  ];

  const filteredOpportunities = opportunities.filter(o =>
    o.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="my-5">
      {/* Step-by-Step Process */}
      <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>🚀 How to Apply for Internships & Jobs</h2>
      <Row>
        {steps.map((s, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <div className="mb-3">{s.icon}</div>
              <Card.Title>{s.step}</Card.Title>
              <Card.Text>{s.desc}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Opportunities Section */}
      <h2 className="text-center my-5" style={{ fontWeight: "bold" }}>💼 Internship & Job Opportunities</h2>
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="🔍 Search opportunities (e.g. Internshala, LinkedIn)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <Row>
        {filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((o, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0 text-center p-3">
                <div className="mb-3">{o.icon}</div>
                <Card.Title>{o.name}</Card.Title>
                <Card.Text>{o.desc}</Card.Text>
                <Button variant="primary" href={o.link} target="_blank" rel="noopener noreferrer">Visit</Button>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No opportunities found for "{search}"</p>
        )}
      </Row>
    </Container>
  );
}

export default InternshipsSteps;
