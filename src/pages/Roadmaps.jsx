// src/pages/Roadmaps.jsx
import React, { useState } from "react";
import { Container, Form, Accordion, Button } from "react-bootstrap";

function Roadmaps() {
  const [search, setSearch] = useState("");

  const paths = [
    // ---------- FRONTEND ----------
    {
      title: "Frontend Developer",
      steps: [
        { step: "HTML Basics", linkNotes: "/notes#HTML", linkCheats: "/cheatsheets#HTML", linkW3: "https://www.w3schools.com/html/" },
        { step: "CSS Basics", linkNotes: "/notes#CSS", linkCheats: "/cheatsheets#CSS", linkW3: "https://www.w3schools.com/css/" },
        { step: "JavaScript Basics", linkNotes: "/notes#JS", linkCheats: "/cheatsheets#JS", linkW3: "https://www.w3schools.com/js/" },
        { step: "React Fundamentals", linkNotes: "/notes#React", linkCheats: "/cheatsheets#React", linkW3: "https://reactjs.org/docs/getting-started.html" },
        { step: "Responsive Design", linkNotes: "/notes#Responsive", linkCheats: "/cheatsheets#CSS", linkW3: "https://www.w3schools.com/css/css_rwd_intro.asp" },
        { step: "Frontend Projects", linkNotes: "/notes#FrontendProject", linkCheats: "/cheatsheets#Frontend", linkW3: "https://www.kaggle.com/" },
      ],
    },

    // ---------- FULLSTACK ----------
    {
      title: "Fullstack Developer",
      steps: [
        { step: "Frontend Basics", linkNotes: "/notes#Frontend", linkCheats: "/cheatsheets#Frontend", linkW3: "https://www.w3schools.com/" },
        { step: "Backend Basics (Node.js, Express)", linkNotes: "/notes#Node", linkCheats: "/cheatsheets#Node", linkW3: "https://nodejs.org/en/docs/" },
        { step: "Database Basics (SQL/NoSQL)", linkNotes: "/notes#DB", linkCheats: "/cheatsheets#SQL", linkW3: "https://www.w3schools.com/sql/" },
        { step: "Authentication & Security", linkNotes: "/notes#Auth", linkCheats: "/cheatsheets#Security", linkW3: "https://www.w3schools.com/" },
        { step: "Deploy Applications", linkNotes: "/notes#Deploy", linkCheats: "/cheatsheets#Deploy", linkW3: "https://www.w3schools.com/" },
      ],
    },

    // ---------- BACKEND ----------
    {
      title: "Backend Developer",
      steps: [
        { step: "Node.js Basics", linkNotes: "/notes#Node", linkCheats: "/cheatsheets#Node", linkW3: "https://nodejs.org/en/docs/" },
        { step: "Express.js Framework", linkNotes: "/notes#Express", linkCheats: "/cheatsheets#Node", linkW3: "https://expressjs.com/" },
        { step: "Database (SQL / MongoDB)", linkNotes: "/notes#DB", linkCheats: "/cheatsheets#SQL", linkW3: "https://www.w3schools.com/sql/" },
        { step: "API Development & Testing", linkNotes: "/notes#API", linkCheats: "/cheatsheets#API", linkW3: "https://www.w3schools.com/" },
        { step: "Server Deployment", linkNotes: "/notes#Deploy", linkCheats: "/cheatsheets#Deploy", linkW3: "https://www.w3schools.com/" },
      ],
    },

    // ---------- DATA ANALYST ----------
    {
      title: "Data Analyst",
      steps: [
        { step: "Excel / Spreadsheets Basics", linkNotes: "/notes#Excel", linkCheats: "/cheatsheets#Excel", linkW3: "https://www.w3schools.com/excel/" },
        { step: "Data Cleaning & Manipulation (Python/Pandas)", linkNotes: "/notes#DataCleaning", linkCheats: "/cheatsheets#Python", linkW3: "https://pandas.pydata.org/docs/" },
        { step: "SQL for Data Analysis", linkNotes: "/notes#SQL", linkCheats: "/cheatsheets#SQL", linkW3: "https://www.w3schools.com/sql/" },
        { step: "Data Visualization (Matplotlib/Seaborn)", linkNotes: "/notes#Visualization", linkCheats: "/cheatsheets#Python", linkW3: "https://matplotlib.org/stable/tutorials/introductory/pyplot.html" },
        { step: "Statistics & Probability", linkNotes: "/notes#Statistics", linkCheats: "/cheatsheets#Python", linkW3: "https://www.w3schools.com/statistics/" },
        { step: "BI Tools (Power BI, Tableau)", linkNotes: "/notes#BI", linkCheats: "/cheatsheets#BI", linkW3: "https://www.w3schools.com/powerbi/" },
        { step: "Mini Projects / Case Studies", linkNotes: "/notes#DataProjects", linkCheats: "/cheatsheets#Python", linkW3: "https://www.kaggle.com/" },
      ],
    },

    // ---------- AI / ML ----------
    {
      title: "AI Engineer",
      steps: [
        { step: "Python for AI", linkNotes: "/notes#Python", linkCheats: "/cheatsheets#Python", linkW3: "https://www.w3schools.com/python/" },
        { step: "Linear Algebra & Statistics", linkNotes: "/notes#Math", linkCheats: "/cheatsheets#Math", linkW3: "https://www.w3schools.com/math/" },
        { step: "Machine Learning Basics", linkNotes: "/notes#ML", linkCheats: "/cheatsheets#ML", linkW3: "https://scikit-learn.org/" },
        { step: "Deep Learning (TensorFlow/PyTorch)", linkNotes: "/notes#DL", linkCheats: "/cheatsheets#DL", linkW3: "https://www.tensorflow.org/" },
        { step: "AI Projects & Deployment", linkNotes: "/notes#AIProjects", linkCheats: "/cheatsheets#Python", linkW3: "https://www.kaggle.com/" },
      ],
    },

        // ---------- DEVOPS ----------
    {
      title: "DevOps Engineer",
      steps: [
        { step: "Linux Basics", linkNotes: "/notes#Linux", linkCheats: "/cheatsheets#Linux", linkW3: "https://www.w3schools.com/linux/" },
        { step: "CI/CD Pipelines", linkNotes: "/notes#CI", linkCheats: "/cheatsheets#DevOps", linkW3: "https://www.w3schools.com/" },
        { step: "Docker & Containers", linkNotes: "/notes#Docker", linkCheats: "/cheatsheets#Docker", linkW3: "https://docs.docker.com/" },
        { step: "Kubernetes Basics", linkNotes: "/notes#K8s", linkCheats: "/cheatsheets#K8s", linkW3: "https://kubernetes.io/docs/home/" },
        { step: "Cloud (AWS, Azure, GCP)", linkNotes: "/notes#Cloud", linkCheats: "/cheatsheets#Cloud", linkW3: "https://www.w3schools.com/" },
      ],
    },
 // ---------- CYBERSECURITY ----------
    {
      title: "Cybersecurity Engineer",
      steps: [
        { step: "Networking Basics", linkNotes: "/notes#Networking", linkCheats: "/cheatsheets#Networking", linkW3: "https://www.w3schools.com/" },
        { step: "Linux Security", linkNotes: "/notes#LinuxSec", linkCheats: "/cheatsheets#Linux", linkW3: "https://www.w3schools.com/linux/" },
        { step: "Web Security (OWASP)", linkNotes: "/notes#OWASP", linkCheats: "/cheatsheets#Security", linkW3: "https://owasp.org/" },
        { step: "Penetration Testing Basics", linkNotes: "/notes#Pentest", linkCheats: "/cheatsheets#Security", linkW3: "https://www.w3schools.com/" },
        { step: "Certifications (CEH, CompTIA)", linkNotes: "/notes#Certs", linkCheats: "/cheatsheets#Certs", linkW3: "https://www.w3schools.com/" },
      ],
    },

    // ---------- MOBILE DEV ----------
    {
      title: "Mobile App Developer",
      steps: [
        { step: "Java/Kotlin for Android", linkNotes: "/notes#Android", linkCheats: "/cheatsheets#Java", linkW3: "https://developer.android.com/docs" },
        { step: "Swift for iOS", linkNotes: "/notes#iOS", linkCheats: "/cheatsheets#Swift", linkW3: "https://developer.apple.com/documentation/swift" },
        { step: "React Native / Flutter", linkNotes: "/notes#ReactNative", linkCheats: "/cheatsheets#React", linkW3: "https://reactnative.dev/docs/getting-started" },
        { step: "App Deployment", linkNotes: "/notes#DeployApp", linkCheats: "/cheatsheets#Deploy", linkW3: "https://www.w3schools.com/" },
      ],
    },

    // ---------- BLOCKCHAIN ----------
    {
      title: "Blockchain Developer",
      steps: [
        { step: "Blockchain Basics", linkNotes: "/notes#Blockchain", linkCheats: "/cheatsheets#Blockchain", linkW3: "https://www.w3schools.com/" },
        { step: "Smart Contracts (Solidity)", linkNotes: "/notes#Solidity", linkCheats: "/cheatsheets#Solidity", linkW3: "https://docs.soliditylang.org/" },
        { step: "Ethereum & DApps", linkNotes: "/notes#Ethereum", linkCheats: "/cheatsheets#Ethereum", linkW3: "https://ethereum.org/en/developers/docs/" },
        { step: "Web3.js / Ethers.js", linkNotes: "/notes#Web3", linkCheats: "/cheatsheets#Web3", linkW3: "https://web3js.readthedocs.io/" },
        { step: "Blockchain Projects", linkNotes: "/notes#BlockchainProj", linkCheats: "/cheatsheets#Projects", linkW3: "https://www.kaggle.com/" },
      ],
    },
// ---------- GAME DEVELOPMENT ----------
    {
      title: "Game Developer",
      steps: [
        { step: "C++ / C# Basics", linkNotes: "/notes#CPlus", linkCheats: "/cheatsheets#CPlus", linkW3: "https://www.w3schools.com/cpp/" },
        { step: "Unity / Unreal Engine", linkNotes: "/notes#Unity", linkCheats: "/cheatsheets#Unity", linkW3: "https://unity.com/learn" },
        { step: "2D / 3D Game Mechanics", linkNotes: "/notes#GameMech", linkCheats: "/cheatsheets#GameDev", linkW3: "https://www.w3schools.com/" },
        { step: "Game Physics & AI", linkNotes: "/notes#GameAI", linkCheats: "/cheatsheets#GameDev", linkW3: "https://www.w3schools.com/" },
        { step: "Deploy Games", linkNotes: "/notes#GameDeploy", linkCheats: "/cheatsheets#Deploy", linkW3: "https://www.w3schools.com/" },
      ],
    },

    // Add these paths to your existing paths array

// ---------- NLP Engineer ----------
{
  title: "NLP Engineer",
  steps: [
    { step: "Python for NLP", linkNotes: "/notes#Python", linkCheats: "/cheatsheets#Python", linkW3: "https://www.w3schools.com/python/" },
    { step: "Text Preprocessing", linkNotes: "/notes#TextPreprocess", linkCheats: "/cheatsheets#Python", linkW3: "https://www.nltk.org/" },
    { step: "NLP Libraries (NLTK, SpaCy)", linkNotes: "/notes#NLP", linkCheats: "/cheatsheets#Python", linkW3: "https://spacy.io/" },
    { step: "Sentiment Analysis / Chatbots", linkNotes: "/notes#Chatbots", linkCheats: "/cheatsheets#Python", linkW3: "https://www.w3schools.com/" },
    { step: "NLP Projects", linkNotes: "/notes#NLPProjects", linkCheats: "/cheatsheets#Python", linkW3: "https://www.kaggle.com/" },
  ],
},

// ---------- Cloud Engineer ----------
{
  title: "Cloud Engineer",
  steps: [
    { step: "Cloud Basics (AWS, Azure, GCP)", linkNotes: "/notes#Cloud", linkCheats: "/cheatsheets#Cloud", linkW3: "https://www.w3schools.com/" },
    { step: "Virtualization & Containers", linkNotes: "/notes#Containers", linkCheats: "/cheatsheets#Docker", linkW3: "https://www.docker.com/" },
    { step: "CI/CD & Automation", linkNotes: "/notes#CI", linkCheats: "/cheatsheets#DevOps", linkW3: "https://www.w3schools.com/" },
    { step: "Monitoring & Security", linkNotes: "/notes#CloudSec", linkCheats: "/cheatsheets#Security", linkW3: "https://www.w3schools.com/" },
    { step: "Deploy Cloud Projects", linkNotes: "/notes#CloudProj", linkCheats: "/cheatsheets#Deploy", linkW3: "https://www.kaggle.com/" },
  ],
},

// ---------- QA / Testing ----------
{
  title: "QA Tester / Software Tester",
  steps: [
    { step: "Software Testing Basics", linkNotes: "/notes#QA", linkCheats: "/cheatsheets#QA", linkW3: "https://www.w3schools.com/" },
    { step: "Manual Testing", linkNotes: "/notes#Manual", linkCheats: "/cheatsheets#QA", linkW3: "https://www.w3schools.com/" },
    { step: "Automation Testing (Selenium)", linkNotes: "/notes#Selenium", linkCheats: "/cheatsheets#QA", linkW3: "https://www.selenium.dev/documentation/" },
    { step: "API Testing (Postman)", linkNotes: "/notes#Postman", linkCheats: "/cheatsheets#API", linkW3: "https://www.postman.com/" },
    { step: "Reporting & QA Projects", linkNotes: "/notes#QAProjects", linkCheats: "/cheatsheets#QA", linkW3: "https://www.kaggle.com/" },
  ],
},

// ---------- Robotics ----------
{
  title: "Robotics Engineer",
  steps: [
    { step: "Embedded Systems Basics", linkNotes: "/notes#Embedded", linkCheats: "/cheatsheets#Embedded", linkW3: "https://www.w3schools.com/" },
    { step: "Microcontrollers (Arduino/Raspberry Pi)", linkNotes: "/notes#Microcontrollers", linkCheats: "/cheatsheets#Embedded", linkW3: "https://www.arduino.cc/" },
    { step: "Sensors & Actuators", linkNotes: "/notes#Sensors", linkCheats: "/cheatsheets#Embedded", linkW3: "https://www.w3schools.com/" },
    { step: "Robot Programming (Python/C++)", linkNotes: "/notes#RobotProg", linkCheats: "/cheatsheets#Python", linkW3: "https://www.w3schools.com/python/" },
    { step: "Robotics Projects", linkNotes: "/notes#RoboticsProj", linkCheats: "/cheatsheets#Projects", linkW3: "https://www.kaggle.com/" },
  ],
},

// ---------- Embedded Systems ----------
{
  title: "Embedded Systems Engineer",
  steps: [
    { step: "C / C++ Programming", linkNotes: "/notes#CPlus", linkCheats: "/cheatsheets#CPlus", linkW3: "https://www.w3schools.com/cpp/" },
    { step: "Microcontrollers Basics", linkNotes: "/notes#Microcontrollers", linkCheats: "/cheatsheets#Embedded", linkW3: "https://www.arduino.cc/" },
    { step: "RTOS Basics", linkNotes: "/notes#RTOS", linkCheats: "/cheatsheets#Embedded", linkW3: "https://www.w3schools.com/" },
    { step: "Communication Protocols (I2C, SPI, UART)", linkNotes: "/notes#Protocols", linkCheats: "/cheatsheets#Embedded", linkW3: "https://www.w3schools.com/" },
    { step: "Embedded Projects", linkNotes: "/notes#EmbeddedProj", linkCheats: "/cheatsheets#Projects", linkW3: "https://www.kaggle.com/" },
  ],
},

// ---------- SEO / Digital Marketing ----------
{
  title: "SEO Specialist / Digital Marketing",
  steps: [
    { step: "SEO Basics", linkNotes: "/notes#SEO", linkCheats: "/cheatsheets#SEO", linkW3: "https://www.w3schools.com/" },
    { step: "Content Marketing & Blogging", linkNotes: "/notes#Content", linkCheats: "/cheatsheets#Marketing", linkW3: "https://www.w3schools.com/" },
    { step: "Google Analytics & Ads", linkNotes: "/notes#Analytics", linkCheats: "/cheatsheets#Tools", linkW3: "https://analytics.google.com/" },
    { step: "Social Media Marketing", linkNotes: "/notes#SocialMedia", linkCheats: "/cheatsheets#Marketing", linkW3: "https://www.w3schools.com/" },
    { step: "Marketing Projects & Case Studies", linkNotes: "/notes#MarketingProj", linkCheats: "/cheatsheets#Projects", linkW3: "https://www.kaggle.com/" },
  ],
},

// ---------- Digital Designer ----------
{
  title: "Digital Designer / Graphic Designer",
  steps: [
    { step: "Design Principles", linkNotes: "/notes#Design", linkCheats: "/cheatsheets#Design", linkW3: "https://www.w3schools.com/" },
    { step: "Adobe Photoshop / Illustrator", linkNotes: "/notes#Adobe", linkCheats: "/cheatsheets#Design", linkW3: "https://www.adobe.com/creativecloud.html" },
    { step: "UI/UX Basics", linkNotes: "/notes#UX", linkCheats: "/cheatsheets#UX", linkW3: "https://www.w3schools.com/" },
    { step: "Portfolio & Projects", linkNotes: "/notes#Portfolio", linkCheats: "/cheatsheets#Portfolio", linkW3: "https://www.behance.net/" },
  ],
},
    {
      title: "Mobile App Developer (Bus, Cab, Truck Booking Apps)",
      steps: [
        { step: "Learn Flutter / React Native for cross-platform apps", linkNotes: "/notes#ReactNative", linkCheats: "/cheatsheets#Mobile", linkW3: "https://reactnative.dev/docs/getting-started" },
        { step: "Integrate REST APIs for booking and user management", linkNotes: "/notes#APIs", linkCheats: "/cheatsheets#Backend", linkW3: "https://www.w3schools.com/js/js_api_intro.asp" },
        { step: "Implement Push Notifications & Offline Mode", linkNotes: "/notes#Mobile", linkCheats: "/cheatsheets#Mobile", linkW3: "https://flutter.dev/docs/development/ui/advanced" },
      ],
    },
    {
      title: "Web Developer (Transport Company Portals)",
      steps: [
        { step: "HTML, CSS, JavaScript fundamentals", linkNotes: "/notes#HTMLCSSJS", linkCheats: "/cheatsheets#Frontend", linkW3: "https://www.w3schools.com/" },
        { step: "Backend development using Node.js / Django / Spring Boot", linkNotes: "/notes#Backend", linkCheats: "/cheatsheets#Backend", linkW3: "https://www.w3schools.com/nodejs/" },
        { step: "Database design & integration (SQL/NoSQL)", linkNotes: "/notes#SQL", linkCheats: "/cheatsheets#Database", linkW3: "https://www.w3schools.com/sql/" },
      ],
    },
  {
      title: "Cross-Platform App Developer (Flutter/React Native)",
      steps: [
        { step: "Flutter or React Native basics", linkNotes: "/notes#Mobile", linkCheats: "/cheatsheets#Mobile", linkW3: "https://flutter.dev/docs" },
        { step: "Integrate APIs and real-time updates", linkNotes: "/notes#APIs", linkCheats: "/cheatsheets#Backend", linkW3: "https://www.w3schools.com/js/js_api_intro.asp" },
        { step: "Push Notifications & Offline Support", linkNotes: "/notes#Mobile", linkCheats: "/cheatsheets#Mobile", linkW3: "https://flutter.dev/docs/development/ui/advanced" },
      ],
    },
    {
      title: "Progressive Web App (PWA) Developer",
      steps: [
        { step: "Service workers & caching strategies", linkNotes: "/notes#PWA", linkCheats: "/cheatsheets#Frontend", linkW3: "https://web.dev/progressive-web-apps/" },
        { step: "Web App Manifest & Offline mode", linkNotes: "/notes#PWA", linkCheats: "/cheatsheets#Frontend", linkW3: "https://web.dev/progressive-web-apps/" },
        { step: "Push notifications & install prompt", linkNotes: "/notes#PWA", linkCheats: "/cheatsheets#Frontend", linkW3: "https://web.dev/push-notifications-best-practices/" },
      ],
    },
    {
      title: "Payment Gateway Integration Developer",
      steps: [
        { step: "Stripe / PayPal / Razorpay API integration", linkNotes: "/notes#Payments", linkCheats: "/cheatsheets#Payments", linkW3: "https://stripe.com/docs" },
        { step: "Secure payment & tokenization practices", linkNotes: "/notes#Security", linkCheats: "/cheatsheets#Security", linkW3: "https://www.w3schools.com/" },
        { step: "Transaction logging & reconciliation", linkNotes: "/notes#Payments", linkCheats: "/cheatsheets#Payments", linkW3: "https://www.w3schools.com/" },
      ],
    },
    {
      title: "E-commerce Developer (Auto Parts, Tyres, Services)",
      steps: [
        { step: "Build catalog, cart, checkout flows", linkNotes: "/notes#Ecommerce", linkCheats: "/cheatsheets#Ecommerce", linkW3: "https://www.w3schools.com/" },
        { step: "Integrate payment & inventory management", linkNotes: "/notes#Ecommerce", linkCheats: "/cheatsheets#Ecommerce", linkW3: "https://www.w3schools.com/" },
        { step: "Responsive & mobile-friendly UI", linkNotes: "/notes#Frontend", linkCheats: "/cheatsheets#Frontend", linkW3: "https://www.w3schools.com/" },
      ],
    },
    {
      title: "Chatbot Developer (Customer Support for Transport Apps)",
      steps: [
        { step: "Dialogflow / Rasa / Botpress basics", linkNotes: "/notes#Chatbots", linkCheats: "/cheatsheets#AI", linkW3: "https://cloud.google.com/dialogflow/docs" },
        { step: "Integrate with mobile/web apps", linkNotes: "/notes#Chatbots", linkCheats: "/cheatsheets#AI", linkW3: "https://cloud.google.com/dialogflow/docs" },
        { step: "Train NLP models for FAQ & booking queries", linkNotes: "/notes#Chatbots", linkCheats: "/cheatsheets#AI", linkW3: "https://cloud.google.com/dialogflow/docs" },
      ],
    },
  {
      title: "IoT Developer (Connected Traffic Lights)",
      steps: [
        { step: "Arduino / Raspberry Pi programming", linkNotes: "/notes#IoT", linkCheats: "/cheatsheets#IoT", linkW3: "https://www.arduino.cc/" },
        { step: "Sensors & Actuators integration", linkNotes: "/notes#IoT", linkCheats: "/cheatsheets#IoT", linkW3: "https://www.arduino.cc/" },
        { step: "MQTT / IoT communication protocols", linkNotes: "/notes#IoT", linkCheats: "/cheatsheets#IoT", linkW3: "https://mqtt.org/documentation" },
      ],
    },
  {
      title: "Cloud Developer (AWS/Azure Transport Apps)",
      steps: [
        { step: "Learn AWS / Azure / GCP basics", linkNotes: "/notes#Cloud", linkCheats: "/cheatsheets#Cloud", linkW3: "https://aws.amazon.com/getting-started/" },
        { step: "Deploy transport apps to cloud", linkNotes: "/notes#Cloud", linkCheats: "/cheatsheets#Cloud", linkW3: "https://azure.microsoft.com/en-in/get-started/" },
        { step: "Monitoring & scaling", linkNotes: "/notes#Cloud", linkCheats: "/cheatsheets#Cloud", linkW3: "https://cloud.google.com/products/operations" },
      ],
    },
 {
      title: "Blockchain Developer (Secure Toll/Transactions)",
      steps: [
        { step: "Ethereum / Solidity basics", linkNotes: "/notes#Blockchain", linkCheats: "/cheatsheets#Blockchain", linkW3: "https://ethereum.org/en/developers/docs/" },
        { step: "Smart contract deployment", linkNotes: "/notes#Blockchain", linkCheats: "/cheatsheets#Blockchain", linkW3: "https://ethereum.org/en/developers/docs/" },
        { step: "Integrate blockchain with payment apps", linkNotes: "/notes#Blockchain", linkCheats: "/cheatsheets#Blockchain", linkW3: "https://ethereum.org/en/developers/docs/" },
      ],
    },
  {
  title: "EV Charging Station Software Developer",
  steps: [
    { step: "IoT & Cloud integration", linkNotes: "/notes#EV", linkCheats: "/cheatsheets#EV", linkW3: "https://www.w3schools.com/" },
    { step: "Payment & Monitoring Systems", linkNotes: "/notes#EV", linkCheats: "/cheatsheets#EV", linkW3: "https://www.w3schools.com/" },
    { step: "Mobile app control & notifications", linkNotes: "/notes#Mobile", linkCheats: "/cheatsheets#Mobile", linkW3: "https://flutter.dev/docs" }
  ]
} // no comma here

  ];

  const filteredPaths = paths.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.steps.some((s) => s.step.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">🛣️ Roadmaps</h1>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search career paths or steps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Accordion defaultActiveKey="0">
        {filteredPaths.map((path, i) => (
          <Accordion.Item eventKey={i.toString()} key={i}>
            <Accordion.Header>{path.title}</Accordion.Header>
            <Accordion.Body>
              <ol>
                {path.steps.map((step, idx) => (
                  <li key={idx} className="mb-2">
                    {step.step}{" "}
                    <Button size="sm" variant="outline-primary" href={step.linkNotes} target="_blank" className="me-1">Notes</Button>
                    <Button size="sm" variant="outline-success" href={step.linkCheats} target="_blank" className="me-1">Cheatsheet</Button>
                    <Button size="sm" variant="outline-info" href={step.linkW3} target="_blank">W3</Button>
                  </li>
                ))}
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default Roadmaps;
