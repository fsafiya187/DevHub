// src/pages/Practice.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Accordion, Badge } from "react-bootstrap";

function Practice() {
  const [search, setSearch] = useState("");

  // Sample data: 30+ practice items
  const categories = [
    {
      name: "Coding Challenges",
      items: [
        {
          title: "Reverse a String",
          difficulty: "Easy",
          description: "Write a function to reverse a string.",
          solution: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
        },
        {
          title: "Palindrome Check",
          difficulty: "Easy",
          description: "Check if a string is a palindrome.",
          solution: `function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}`,
        },
        {
          title: "Factorial Using Recursion",
          difficulty: "Medium",
          description: "Calculate factorial of a number using recursion.",
          solution: `function factorial(n) {
  if(n === 0) return 1;
  return n * factorial(n-1);
}`,
        },
        {
          title: "Fibonacci Sequence",
          difficulty: "Medium",
          description: "Print first N Fibonacci numbers.",
          solution: `function fibonacci(n) {
  const arr = [0,1];
  for(let i=2; i<n; i++) {
    arr.push(arr[i-1]+arr[i-2]);
  }
  return arr;
}`,
        },
        {
          title: "Binary Search",
          difficulty: "Medium",
          description: "Implement binary search on a sorted array.",
          solution: `function binarySearch(arr, target) {
  let left = 0, right = arr.length-1;
  while(left <= right){
    const mid = Math.floor((left+right)/2);
    if(arr[mid] === target) return mid;
    if(arr[mid] < target) left = mid+1;
    else right = mid-1;
  }
  return -1;
}`,
        },
        {
          title: "Merge Sort",
          difficulty: "Hard",
          description: "Implement merge sort algorithm.",
          solution: `function mergeSort(arr) {
  if(arr.length <=1) return arr;
  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0,mid));
  const right = mergeSort(arr.slice(mid));
  const merged = [];
  while(left.length && right.length){
    if(left[0]<right[0]) merged.push(left.shift());
    else merged.push(right.shift());
  }
  return merged.concat(left,right);
}`,
        },
        {
          title: "Longest Substring Without Repeating",
          difficulty: "Hard",
          description: "Find the length of the longest substring without repeating characters.",
          solution: `function lengthOfLongestSubstring(s){
  let set = new Set(), left=0, maxLen=0;
  for(let right=0; right<s.length; right++){
    while(set.has(s[right])) set.delete(s[left++]);
    set.add(s[right]);
    maxLen = Math.max(maxLen, set.size);
  }
  return maxLen;
}`,
        },
      ],
    },
    {
      name: "Quizzes",
      items: [
        {
          title: "HTML Basics MCQ",
          difficulty: "Easy",
          description: "Questions on HTML tags, attributes, forms.",
          resources: [{ name: "Try MCQs", link: "https://www.w3schools.com/html/html_quiz.asp" }],
        },
        {
          title: "CSS Flexbox Quiz",
          difficulty: "Medium",
          description: "Test your CSS Flexbox knowledge.",
          resources: [{ name: "Flexbox Quiz", link: "https://flexboxfroggy.com/" }],
        },
        {
          title: "JavaScript ES6 MCQ",
          difficulty: "Medium",
          description: "MCQs on modern JavaScript features.",
          resources: [{ name: "ES6 Quiz", link: "https://www.w3schools.com/js/js_es6.asp" }],
        },
        {
          title: "Python OOP Quiz",
          difficulty: "Medium",
          description: "Test classes, objects, inheritance.",
          resources: [{ name: "Python Quiz", link: "https://www.w3schools.com/python/python_classes.asp" }],
        },
        {
          title: "DBMS SQL MCQ",
          difficulty: "Hard",
          description: "Test your SQL queries and joins.",
          resources: [{ name: "SQL Quiz", link: "https://www.w3schools.com/sql/sql_quiz.asp" }],
        },
        {
          title: "React Hooks Quiz",
          difficulty: "Medium",
          description: "Test knowledge of React hooks and state management.",
          resources: [{ name: "React Quiz", link: "https://react-hooks-examples.com/" }],
        },
      ],
    },
    {
      name: "Small Projects",
      items: [
        {
          title: "Weather App",
          difficulty: "Medium",
          description: "Fetch weather data from API and display.",
          steps: ["Setup React app", "Create API fetch function", "Display data in components", "Style UI"],
        },
        {
          title: "Expense Tracker",
          difficulty: "Medium",
          description: "Track income and expenses.",
          steps: ["Setup state for expenses", "Add forms for input", "Display list of transactions", "Calculate total balance"],
        },
        {
          title: "ToDo List App",
          difficulty: "Easy",
          description: "Create a task manager app.",
          steps: ["Create input for tasks", "Store tasks in state", "Mark completed tasks", "Style UI"],
        },
        {
          title: "Movie Search App",
          difficulty: "Medium",
          description: "Search movies using an external API.",
          steps: ["Fetch API data", "Display search results", "Add filters and styling"],
        },
        {
          title: "Quiz App",
          difficulty: "Hard",
          description: "Create an MCQ quiz app with score tracking.",
          steps: ["Create question bank", "Display questions and options", "Track score", "Show result summary"],
        },
      ],
    },
  ];

  const filteredCategories = categories.map(cat => ({
    ...cat,
    items: cat.items.filter(
      item => 
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
    ),
  })).filter(cat => cat.items.length > 0);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Code copied to clipboard!");
  };

  const downloadSnippet = (text, name) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">🎯 Practice</h1>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search practice challenges, quizzes, projects..."
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
                {cat.items.map((item, idx) => (
                  <Col key={idx} md={6} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body>
                        <Card.Title>{item.title} <Badge bg={item.difficulty==="Easy"?"success":item.difficulty==="Medium"?"warning":"danger"}>{item.difficulty}</Badge></Card.Title>
                        <Card.Text>{item.description}</Card.Text>

                        {item.solution && (
                          <>
                            <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "5px", overflowX: "auto" }}>
                              {item.solution}
                            </pre>
                            <div className="mb-2">
                              <Button variant="success" size="sm" className="me-2" onClick={() => copyToClipboard(item.solution)}>Copy</Button>
                              <Button variant="info" size="sm" onClick={() => downloadSnippet(item.solution, item.title)}>Download</Button>
                            </div>
                          </>
                        )}

                        {item.steps && (
                          <ol>
                            {item.steps.map((s, k) => <li key={k}>{s}</li>)}
                          </ol>
                        )}

                        {item.resources && item.resources.map((r,k)=>(
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

export default Practice;
