import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Button, Form, ListGroup } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Community() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [posts, setPosts] = useState(() => {
    try { return JSON.parse(localStorage.getItem("community_posts")) || []; }
    catch { return []; }
  });

  const [question, setQuestion] = useState("");

  useEffect(() => {
    localStorage.setItem("community_posts", JSON.stringify(posts));
  }, [posts]);

  const requireLogin = () => {
    alert("You must login first!");
    navigate("/login");
  };

  const handlePost = () => {
    if (!user) return requireLogin();
    if (!question.trim()) return;
    const newPost = {
      id: crypto.randomUUID(),
      author: user.username,
      question: question.trim(),
      upvotes: 0,
      answers: []
    };
    setPosts([newPost, ...posts]);
    setQuestion("");
  };

  const handleAnswer = (postId, answerText) => {
    if (!user) return requireLogin();
    if (!answerText.trim()) return;
    setPosts(posts.map(post => {
      if (post.id === postId) {
        post.answers.push({
          id: crypto.randomUUID(),
          author: user.username,
          text: answerText.trim(),
          upvotes: 0
        });
      }
      return post;
    }));
  };

  const handleUpvotePost = (postId) => {
    if (!user) return requireLogin();
    setPosts(posts.map(post => post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post));
  };

  const handleUpvoteAnswer = (postId, answerId) => {
    if (!user) return requireLogin();
    setPosts(posts.map(post => {
      if (post.id === postId) {
        post.answers = post.answers.map(ans => ans.id === answerId ? { ...ans, upvotes: ans.upvotes + 1 } : ans);
      }
      return post;
    }));
  };

  return (
    <Container className="my-4">
      <h2 className="mb-4">💬 Community Forum</h2>

      <Card className="mb-4 p-3">
        <Form.Control 
          placeholder={user ? "Ask a question..." : "Login to post a question"} 
          value={question} 
          onChange={e => setQuestion(e.target.value)} 
          as="textarea" rows={2} 
        />
        <Button className="mt-2" onClick={handlePost}>
          Post Question
        </Button>
      </Card>

      {posts.length === 0 && <p>No posts yet. Be the first to ask!</p>}

      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id} className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <strong>{post.author}</strong>
              <Button size="sm" variant="outline-primary" onClick={() => handleUpvotePost(post.id)}>⬆ {post.upvotes}</Button>
            </div>
            <p className="mt-2">{post.question}</p>

            {/* Answers */}
            <ListGroup className="ms-4">
              {post.answers.map(ans => (
                <ListGroup.Item key={ans.id} className="d-flex justify-content-between align-items-center">
                  <span><strong>{ans.author}:</strong> {ans.text}</span>
                  <Button size="sm" variant="outline-success" onClick={() => handleUpvoteAnswer(post.id, ans.id)}>⬆ {ans.upvotes}</Button>
                </ListGroup.Item>
              ))}

              {/* Answer input */}
              <AnswerInput postId={post.id} handleAnswer={handleAnswer} user={user} requireLogin={requireLogin} />
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

function AnswerInput({ postId, handleAnswer, user, requireLogin }) {
  const [text, setText] = useState("");
  const submitAnswer = () => {
    if (!text.trim()) return;
    handleAnswer(postId, text);
    setText("");
  };

  return (
    <div className="mt-2">
      <Form.Control 
        placeholder={user ? "Write an answer..." : "Login to answer"} 
        value={text} 
        onChange={e => setText(e.target.value)} 
        as="textarea" rows={1} 
      />
      <Button className="mt-1" size="sm" onClick={user ? submitAnswer : requireLogin}>Submit Answer</Button>
    </div>
  );
}
