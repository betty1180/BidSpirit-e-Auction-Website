import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // CSS

const About = () => {
    return (
        <Container className="about-container mt-5">
            <h1>About Us</h1>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="mb-3"> 
                         <Card.Img /*About image */
                            variant="top" 
                            src="/Images/about bg.JPG" 
                            alt="Antique Collection" 
                            className="about-image" 
                        />
                        <Card.Body>
                            <Card.Text>
                                BidSpirit is the world's leading online marketplace for fine art, antiques, furniture, and collectibles. We make it easy for collectors worldwide to discover and acquire the items they are most passionate about in one place. Our e-auctioning portal is one of the most preferred sites in the industry.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Text> Contact Number: +234 8012 345 6789  <br />Email ID: bidspirit@gmail.com <br />Address: 3rd Avenue, Gwarimpa, Abuja, Nigeria
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
