// src/pages/Projects.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";

function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "AI/ML", "Mini-Project", "Game", "Data/AI"];

  const projects = [
  {
    name: "Personal Finance Dashboard",
    desc: "Visualize income, expenses, and savings trends with interactive charts.",
    link: "https://github.com/yourusername/finance-dashboard",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#ff6f61" />,
    steps: [
      "Setup project folder and install dependencies",
      "Design dashboard layout with charts and tables",
      "Connect data sources (income, expenses, savings)",
      "Implement filtering and visualization",
      "Deploy project to GitHub Pages or Netlify"
    ]
  },
  {
    name: "Habit Tracker",
    desc: "Track daily habits, streaks, and set reminders to stay consistent.",
    link: "https://github.com/yourusername/habit-tracker",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#6c5ce7" />,
    steps: [
      "Create project and install necessary packages",
      "Build habit input forms",
      "Store habits in local storage or database",
      "Display progress and streaks",
      "Add notifications and deploy"
    ]
  },
    {
  name: "Language Translator",
  desc: "Translate text between languages using API integration and text-to-speech.",
  link: "https://github.com/yourusername/language-translator",
  category: "AI/ML",
  icon: <FaLaptopCode size={32} color="#00b894" />,
  steps: [
    "Initialize project with React or other framework",
    "Design input and output text fields",
    "Integrate translation API (like Google Translate API)",
    "Add text-to-speech functionality",
    "Test with multiple languages and deploy"
  ]
},
{
  name: "Real-time Chat App",
  desc: "Instant messaging app with online/offline status, typing indicators, and emoji support.",
  link: "https://github.com/yourusername/realtime-chat",
  category: "Web",
  icon: <FaLaptopCode size={32} color="#0984e3" />,
  steps: [
    "Set up backend server with Node.js or Firebase",
    "Design chat UI and input forms",
    "Implement real-time messaging using WebSockets or Firebase",
    "Add online/offline status and typing indicators",
    "Deploy app and test real-time performance"
  ]
},
  {
    name: "Fitness Tracker App",
    desc: "Log workouts, track calories, and set fitness goals with progress visualization.",
    link: "https://github.com/yourusername/fitness-tracker",
    category: "Mobile",
    icon: <FaLaptopCode size={32} color="#fdcb6e" />,
    steps: [
      "Set up project using React Native or Flutter",
      "Design UI for logging workouts and nutrition",
      "Create database to store user data",
      "Implement charts to visualize progress",
      "Test on mobile devices and deploy"
    ]
  },
  {
    name: "Virtual Keyboard",
    desc: "On-screen keyboard with custom layouts and typing sound effects.",
    link: "https://github.com/yourusername/virtual-keyboard",
    category: "Mini-Project",
    icon: <FaLaptopCode size={32} color="#d63031" />,
    steps: [
      "Create basic HTML layout for keyboard keys",
      "Add CSS for styling keys and layout",
      "Write JavaScript to capture key presses",
      "Add sound effects for typing",
      "Test responsiveness and functionality"
    ]
  },
  {
    name: "URL Shortener",
    desc: "Shorten long URLs and track clicks with analytics dashboard.",
    link: "https://github.com/yourusername/url-shortener",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#00cec9" />,
    steps: [
      "Set up backend with Node.js or Python Flask",
      "Create frontend form to input URLs",
      "Generate short URLs and store in database",
      "Create analytics dashboard to track clicks",
      "Deploy app and test"
    ]
  },
  {
    name: "Recipe Recommendation AI",
    desc: "Suggest recipes based on ingredients using machine learning.",
    link: "https://github.com/yourusername/recipe-ai",
    category: "AI/ML",
    icon: <FaLaptopCode size={32} color="#ff7675" />,
    steps: [
      "Collect recipe dataset and ingredients",
      "Train recommendation model using Python/ML library",
      "Create frontend to input available ingredients",
      "Integrate ML model with frontend",
      "Test recommendations and deploy"
    ]
  },
  {
    name: "Pomodoro Timer",
    desc: "Focus timer using Pomodoro technique with notifications and stats.",
    link: "https://github.com/yourusername/pomodoro-timer",
    category: "Mini-Project",
    icon: <FaLaptopCode size={32} color="#2d3436" />,
    steps: [
      "Create timer UI with start, pause, and reset",
      "Implement Pomodoro logic with work/break intervals",
      "Add notifications when interval ends",
      "Save stats locally or in database",
      "Test timer functionality"
    ]
  },
  {
    name: "Book Library App",
    desc: "Add, remove, and categorize books with search and filter options.",
    link: "https://github.com/yourusername/book-library",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#fd79a8" />,
    steps: [
      "Design database for books with title, author, category",
      "Create frontend to display books",
      "Add functionality to add, remove, and search books",
      "Implement filters by category",
      "Test app and deploy"
    ]
  },
  {
    name: "News Aggregator",
    desc: "Fetch latest news articles from multiple sources and categorize them by topics.",
    link: "https://github.com/yourusername/news-aggregator",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#e17055" />,
    steps: [
      "Use News API to fetch latest news",
      "Create UI to display news by category",
      "Add search functionality for keywords",
      "Implement pagination or infinite scroll",
      "Test and deploy app"
    ]
  },
  {
    name: "Stock Price Tracker",
    desc: "Track and visualize real-time stock prices with historical trends.",
    link: "https://github.com/yourusername/stock-tracker",
    category: "Data/AI",
    icon: <FaLaptopCode size={32} color="#0984e3" />,
    steps: [
      "Integrate stock market API for real-time data",
      "Create charts to show historical trends",
      "Implement search to track multiple stocks",
      "Add alerts for price changes",
      "Test and deploy app"
    ]
  },
  {
    name: "Memory Game",
    desc: "Classic card matching game with difficulty levels and timer.",
    link: "https://github.com/yourusername/memory-game",
    category: "Game",
    icon: <FaLaptopCode size={32} color="#fdcb6e" />,
    steps: [
      "Design grid layout for cards",
      "Add flip animation and match logic",
      "Implement timer and score tracking",
      "Add difficulty levels",
      "Test gameplay and deploy"
    ]
  },
  {
    name: "Virtual Whiteboard",
    desc: "Draw, write, and collaborate on a shared canvas in real-time.",
    link: "https://github.com/yourusername/whiteboard-app",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#6c5ce7" />,
    steps: [
      "Create canvas element and drawing tools",
      "Implement mouse/touch events for drawing",
      "Set up real-time collaboration with WebSockets",
      "Add color and brush options",
      "Test collaboration and deploy"
    ]
  },
  {
    name: "Music Player",
    desc: "Play local or streamed music with playlists, shuffle, and repeat options.",
    link: "https://github.com/yourusername/music-player",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#00b894" />,
    steps: [
      "Set up audio player UI",
      "Load music files or integrate streaming API",
      "Implement playlist, shuffle, repeat features",
      "Add volume and progress controls",
      "Test player and deploy"
    ]
  },
  {
    name: "Calculator",
    desc: "Basic arithmetic calculator with history of calculations.",
    link: "https://github.com/yourusername/calculator",
    category: "Mini-Project",
    icon: <FaLaptopCode size={32} color="#fd79a8" />,
    steps: [
      "Create UI with buttons for numbers and operators",
      "Implement arithmetic logic in JavaScript",
      "Add display for input and result",
      "Add history feature to track calculations",
      "Test and deploy"
    ]
  },
  {
    name: "Weather App",
    desc: "Display current weather and forecast using API data.",
    link: "https://github.com/yourusername/weather-app",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#0984e3" />,
    steps: [
      "Set up API key from weather service",
      "Create input for location search",
      "Fetch current weather and forecast",
      "Display data with icons and charts",
      "Test and deploy app"
    ]
  },
  {
    name: "Portfolio Website",
    desc: "Showcase projects, skills, and contact info in a personal website.",
    link: "https://github.com/yourusername/portfolio",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#6c5ce7" />,
    steps: [
      "Design homepage layout",
      "Add sections for projects, skills, and contact",
      "Implement responsive design",
      "Deploy using GitHub Pages or Netlify",
      "Update regularly with new projects"
    ]
  },
  {
    name: "Chatbot",
    desc: "Interactive chatbot with pre-defined responses or AI integration.",
    link: "https://github.com/yourusername/chatbot",
    category: "AI/ML",
    icon: <FaLaptopCode size={32} color="#ff6f61" />,
    steps: [
      "Design chatbot UI with input and output areas",
      "Implement basic pre-defined response logic",
      "Integrate AI API for smarter responses (optional)",
      "Test conversations and edge cases",
      "Deploy chatbot to web or mobile"
    ]
  },
  {
    name: "Expense Tracker",
    desc: "Track daily expenses, categorize them, and visualize monthly spending.",
    link: "https://github.com/yourusername/expense-tracker",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#ff6f61" />,
    steps: [
      "Design input form for expenses",
      "Store data in localStorage or database",
      "Display expenses in a table with categories",
      "Add charts for monthly spending",
      "Test app and deploy"
    ]
  },
  {
    name: "To-Do List App",
    desc: "Manage daily tasks with add, edit, delete, and complete functionality.",
    link: "https://github.com/yourusername/todo-app",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#6c5ce7" />,
    steps: [
      "Create task input form",
      "Store tasks in localStorage or database",
      "Display tasks with edit/delete options",
      "Mark tasks as complete",
      "Test functionality and deploy"
    ]
  },
  {
    name: "Flashcard Learning App",
    desc: "Learn new topics with flashcards and track progress.",
    link: "https://github.com/yourusername/flashcard-app",
    category: "Mini-Project",
    icon: <FaLaptopCode size={32} color="#00b894" />,
    steps: [
      "Create flashcard component with front/back",
      "Add questions and answers",
      "Track correct/wrong answers",
      "Add category filters and progress stats",
      "Test and deploy"
    ]
  },
  {
    name: "Quiz App",
    desc: "Take multiple-choice quizzes and see score results.",
    link: "https://github.com/yourusername/quiz-app",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#fdcb6e" />,
    steps: [
      "Design UI for questions and options",
      "Store questions in JSON or database",
      "Implement scoring logic",
      "Show results after quiz completion",
      "Test and deploy app"
    ]
  },
  {
    name: "Markdown Editor",
    desc: "Write Markdown text and see live preview in real-time.",
    link: "https://github.com/yourusername/markdown-editor",
    category: "Web",
    icon: <FaLaptopCode size={32} color="#d63031" />,
    steps: [
      "Create input area for Markdown",
      "Use Markdown parser to generate HTML preview",
      "Update preview in real-time",
      "Add save/export functionality",
      "Test and deploy"
    ]
  },
  {
    name: "Portfolio Analyzer",
    desc: "Analyze your investment portfolio with charts and stats.",
    link: "https://github.com/yourusername/portfolio-analyzer",
    category: "Data/AI",
    icon: <FaLaptopCode size={32} color="#00cec9" />,
    steps: [
      "Input portfolio assets and amounts",
      "Fetch real-time prices via API",
      "Calculate gains/losses and percentages",
      "Visualize with charts and tables",
      "Test and deploy app"
    ]
  },
  {
    name: "BMI Calculator",
    desc: "Calculate body mass index and give health suggestions.",
    link: "https://github.com/yourusername/bmi-calculator",
    category: "Mini-Project",
    icon: <FaLaptopCode size={32} color="#ff7675" />,
    steps: [
      "Create input fields for weight and height",
      "Implement BMI calculation logic",
      "Show BMI category (underweight, normal, overweight)",
      "Style with responsive design",
      "Test and deploy app"
    ]
  },
  {
    name: "Crypto Price Tracker",
    desc: "Monitor cryptocurrency prices and trends in real-time.",
    link: "https://github.com/yourusername/crypto-tracker",
    category: "Data/AI",
    icon: <FaLaptopCode size={32} color="#2d3436" />,
    steps: [
      "Fetch crypto prices from API",
      "Display coins with charts and percentage changes",
      "Add search and sorting functionality",
      "Update data periodically",
      "Test and deploy app"
    ]
  },
  {
    name: "Todo Voice Assistant",
    desc: "Add tasks and mark them done using voice commands.",
    link: "https://github.com/yourusername/todo-voice-assistant",
    category: "AI/ML",
    icon: <FaLaptopCode size={32} color="#fd79a8" />,
    steps: [
      "Integrate Web Speech API for voice input",
      "Add tasks to Todo list using voice",
      "Mark tasks as complete via voice commands",
      "Show visual feedback",
      "Test and deploy"
    ]
  },
  {
    name: "Typing Speed Test",
    desc: "Test typing speed and accuracy with random texts.",
    link: "https://github.com/yourusername/typing-speed-test",
    category: "Mini-Project",
    icon: <FaLaptopCode size={32} color="#e17055" />,
    steps: [
      "Display random text for typing",
      "Capture user input and calculate speed/accuracy",
      "Show results after time ends",
      "Add difficulty levels and leaderboard",
      "Test and deploy app"
    ]
  }

  ];

  const filteredProjects = projects.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
  );

  return (
    <div>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #007bff, #6610f2)", color: "white", padding: "40px 20px", borderRadius: "0 0 20px 20px", textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontWeight: "bold" }}>💻 Projects</h1>
        <p style={{ fontSize: "18px", margin: "10px 0 0" }}>Explore practical projects with GitHub links & step-by-step guidance</p>
      </div>

      <Container>
        {/* Search & Category */}
        <Form className="mb-4">
          <Form.Control
            type="text"
            placeholder="🔍 Search projects (e.g. Chatbot, Finance Dashboard)"
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, index) => (
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
                    <Card.Text style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#555" }}>{p.steps}</Card.Text>
                    <Button variant="primary" href={p.link} target="_blank" rel="noopener noreferrer">GitHub Link</Button>
                    <Button variant="secondary" className="ms-2" onClick={() => navigator.clipboard.writeText(p.link)}>Copy Link</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">No projects found for "{search}"</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
