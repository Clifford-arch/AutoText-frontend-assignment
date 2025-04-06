import { useState, useEffect } from "react";
import API from "../services/api";
import { Container, Row, Col, Spinner, Alert, Card } from "react-bootstrap";
import "../assets/scss/post.css"; // Custom styles

const Postlist = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.getPosts();
        setPosts(response.data.slice(0, 5));
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="g-4">
        {posts.map((post, index) => (
          <Col md={6} lg={4} key={post.id} className="fade-in">
            <Card className="post-card shadow-sm h-100">
              <Card.Body>
                <Card.Title className="mb-3">{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Postlist;
