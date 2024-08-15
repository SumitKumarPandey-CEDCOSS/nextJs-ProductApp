"use client"; // Mark this as a client component

import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from './ProductPage.module.css';
import { LoadingSpinner } from './common';
import Header from './header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const ReactStars = dynamic(() => import('react-rating-stars-component'), { ssr: false });

export default function ProductPage({ product }) {
  const [loading, setLoading] = useState(false); // Only if needed

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Header />
      <Container className={`${styles.centeredContainer} mt-5`}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className={`${styles.card} shadow-lg`}>
              <Row noGutters>
                <Col md={6} className={styles.imageCol}>
                  <Card.Img variant="top" src={product.image} className={styles.cardImage} />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="text-muted">{product.description}</Card.Text>
                    <div className="mb-3">
                      <Card.Text className={styles.price}><strong>Price:</strong> ${product.price}</Card.Text>
                      <Card.Text className={`${styles.ratingRow} mb-2`}>
                        <span className={styles.ratingText}><strong>Ratings: </strong></span>
                        <ReactStars
                          count={5}
                          value={product.rating.rate}
                          size={24}
                          activeColor="#ffd700"
                          edit={false}
                        />
                        <span> ({product.rating.count} reviews)</span>
                      </Card.Text>
                      <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                    </div>
                    <Button variant="primary" className="w-100">Add to Cart</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer /> {/* Add Footer */}
    </>
  );
}
