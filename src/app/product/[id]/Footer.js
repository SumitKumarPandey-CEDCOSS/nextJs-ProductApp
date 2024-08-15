import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>Powered by Next.js</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
