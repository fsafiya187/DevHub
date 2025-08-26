// src/pages/Certificates.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaGraduationCap, FaLinkedin, FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";

function Certificates() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Cloud", "Programming", "Data/AI", "Professional"];

  const providers = [
    { name: "Coursera", desc: "Online courses & certificates from top universities.", link: "https://www.coursera.org", icon: <FaGraduationCap size={32} color="#2a73cc" />, category: "Programming" },
    { name: "Udemy", desc: "Affordable courses on programming, design, and more.", link: "https://www.udemy.com", icon: <FaGraduationCap size={32} color="#a435f0" />, category: "Programming" },
    { name: "freeCodeCamp", desc: "Completely free coding certifications & projects.", link: "https://www.freecodecamp.org", icon: <FaGraduationCap size={32} color="#0a0a23" />, category: "Programming" },
    { name: "edX", desc: "Professional certificates & degrees from top institutions.", link: "https://www.edx.org", icon: <FaGraduationCap size={32} color="#02262b" />, category: "Programming" },
    { name: "Google Career Certificates", desc: "IT, Data Analytics, UX Design, and more by Google.", link: "https://grow.google/certificates/", icon: <FaGoogle size={32} color="#ea4335" />, category: "Data/AI" },
    { name: "IBM SkillsBuild", desc: "Free IBM certifications in AI, Cloud, and Cybersecurity.", link: "https://skillsbuild.org", icon: <FaGraduationCap size={32} color="#006699" />, category: "Data/AI" },
    { name: "LinkedIn Learning", desc: "Learn professional skills and earn certificates.", link: "https://www.linkedin.com/learning/", icon: <FaLinkedin size={32} color="#0077b5" />, category: "Professional" },
    { name: "AWS Training & Certification", desc: "Cloud and DevOps certifications by Amazon Web Services.", link: "https://aws.amazon.com/certification/", icon: <FaAws size={32} color="#ff9900" />, category: "Cloud" },
    { name: "Microsoft Learn", desc: "Azure, Office, and technical certifications by Microsoft.", link: "https://learn.microsoft.com", icon: <FaMicrosoft size={32} color="#0078d4" />, category: "Cloud" },
    { name: "Harvard Online", desc: "Courses and certificates by Harvard University.", link: "https://online-learning.harvard.edu/", icon: <FaGraduationCap size={32} color="#a51c30" />, category: "Professional" },
    { name: "Pluralsight", desc: "Tech and IT certifications for developers & engineers.", link: "https://www.pluralsight.com/", icon: <FaGraduationCap size={32} color="#f15b2a" />, category: "Programming" },
    { name: "Udacity", desc: "Nanodegree programs with industry-recognized certificates.", link: "https://www.udacity.com/", icon: <FaGraduationCap size={32} color="#02b3e4" />, category: "Data/AI" },
    { name: "NPTEL", desc: "Free online courses with certificates by IITs, India.", link: "https://nptel.ac.in/", icon: <FaGraduationCap size={32} color="#ff9933" />, category: "Professional" },
    { name: "DataCamp", desc: "Data Science & Analytics certifications.", link: "https://www.datacamp.com/", icon: <FaGraduationCap size={32} color="#1f77b4" />, category: "Data/AI" },
    { name: "edureka!", desc: "Professional courses & certifications in IT.", link: "https://www.edureka.co/", icon: <FaGraduationCap size={32} color="#ff4500" />, category: "Professional" },
    { name: "AWS Academy", desc: "Official AWS courses & certifications.", link: "https://aws.amazon.com/training/awsacademy/", icon: <FaAws size={32} color="#232f3e" />, category: "Cloud" },
  ];

  const filteredProviders = providers.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
  );

  return (
    <div>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #007bff, #6610f2)", color: "white", padding: "40px 20px", borderRadius: "0 0 20px 20px", textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontWeight: "bold" }}>📜 Certificates</h1>
        <p style={{ fontSize: "18px", margin: "10px 0 0" }}>Explore trusted platforms to boost your career with certifications</p>
      </div>

      <Container>
        {/* Search & Category */}
        <Form className="mb-4">
          <Form.Control
            type="text"
            placeholder="🔍 Search certificates (e.g. Google, AWS, Coursera)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-2"
          />
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
          </Form.Select>
        </Form>

        {/* Cards */}
        <Row>
          {filteredProviders.length > 0 ? (
            filteredProviders.map((p, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{ transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Body className="text-center">
                    <div className="mb-3">{p.icon}</div>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Text>{p.desc}</Card.Text>
                    <Button variant="primary" href={p.link} target="_blank" rel="noopener noreferrer">Visit Platform</Button>
                    <Button variant="secondary" className="ms-2" onClick={() => navigator.clipboard.writeText(p.link)}>Copy Link</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">No certificates found for "{search}"</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Certificates;
