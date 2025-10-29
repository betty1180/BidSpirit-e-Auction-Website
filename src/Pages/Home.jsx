import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import $ from 'jquery'; // Importing jQuery
import './Home.css'; // Importing CSS
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Auctions from '../Pages/Auctions';
import Gallery from '../Pages/Gallery';
import SiteMap from '../Pages/SiteMap';
import Feedback from '../Pages/Feedback';
import Ticker from '../Pages/Ticker';

// Sample data for the upcoming auctions
const auctionItems = [
    {
        id: 1,
        title: 'Spring Painting',
        description: 'A beautiful painting made by Beth Anderson from the 18th century in Nigeria.',
        basePrice: '$800',
        imageUrl: '/Images/fine art 4.jpg',
        date: 'Starts in 5d 5h 30mins'
    },
    {
        id: 2,
        title: 'Gray Office Table Set with Chairs',
        description: 'A set of office table and six chairs made in Italy.',
        basePrice: '$1,000',
        imageUrl: '/Images/furniture 3.jpg',
        date: 'Starts in 5d 5h 30mins'
    },
    {
        id: 3, 
        title: 'White and Green Set of Chairs',
        description: 'A set of three white and two green chairs that can be used in the office or at home. Made in USA.',
        basePrice: '$1,000',
        imageUrl: '/Images/furniture 2.jpg',
        date: 'Starts in 5d 5h 30mins'
    },
];


const Home = () => {
    const [name, setName] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    const [visitorCount, setVisitorCount] = useState(0);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleWelcome = (e) => {
        e.preventDefault();
        setShowWelcome(true);
        setVisitorCount(visitorCount + 1);
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShow = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    // jQuery for fade in effect
    useEffect(() => {
        $('.hero-section').fadeIn(1000); // Fade-in effect on component load
    }, []);

    const [showSignModal, setShowSignModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignShow = () => setShowSignModal(true);
    const handleSignClose = () => setShowSignModal(false);

    const toggleSignUp = () => setIsSignUp(!isSignUp);

    return (
        <>
        <Element name='home'></Element>
        <Navbar bg="light" expand="lg" className="custom-navbar">
            <Navbar.Brand as={Link} to="/" className='logo'>
                <img
                    src="\Images\Logo.png" 
                    className="d-inline-block align-top"
                    alt="Logo"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links">
                    <Nav.Link as={Link} to="home">Home</Nav.Link>
                    <Nav.Link as={Link} to="auctions" smooth={true} duration={500}>Auctions</Nav.Link>
                    <Nav.Link as={Link} to="gallery" smooth={true} duration={500}>Gallery</Nav.Link>
                    <Nav.Link as={Link} to="about" smooth={true} duration={500}>About Us</Nav.Link>
                    <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="feedback" smooth={true} duration={500}>Feedback</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button variant="primary" onClick={handleSignShow}>
                Sign In
            </Button>
            <div className='count'>
                <span>Visitor Count: {visitorCount}</span>
            </div>
            
        </Navbar>
  
        <div className="hero-section" style={{ display: 'none' }}>
            <div className="user-name">{name}</div>
            <div className='hero-texts'>
            <h1>Welcome to BidSpirit</h1>
                <p>Your online marketplace for fine art, antiques, collectibles, and lots more.</p>
                <Form onSubmit={handleWelcome}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            placeholder="Enter your first name"
                            value={name}
                            onChange={handleNameChange}
                            className="name-input"
                        />
                    </Form.Group>
                    <Button type="submit" className="cta-button" style={{ width: '400px', marginLeft: '35%'}}>Submit</Button>
                </Form>
                {showWelcome && (
                    <h2 className='welcome-text'>Hello, {name}! Welcome to our auction site!</h2>
                )}
            </div>
            </div>
        <Container className="home-container">
          <Element name='auctions'>
            <div className="auction-section">
                <h1>Upcoming Auctions</h1>
                <Row>
                {auctionItems.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="auction-card" onClick={() => handleShow(item)}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.date}</Card.Text>
                                <Card.Text>Base Price: {item.basePrice}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </div>
            </Element>

            <div>
              {/* auctions component */}
                <Auctions/>
                <div className='space'></div>
                <Element name='gallery'>
                  {/* gallery component */}
                  <Gallery />
                </Element>
                <div className='space'></div>
                <Element name='about'>
                  {/* about component */}
                  <About />
                </Element>
                <div className='space'></div>
                <div className='space'></div>
                <Element name='contact'>
                  {/* contact component */}
                  <Contact />
                </Element>
                <div className='space'></div>
                <Element name='feedback'>
                  {/* feedback component */}
                  <Feedback />
                </Element>
                <div className='space'></div>
                {/* sitemap component */}
                <SiteMap />
            </div>


            {/* Modal for displaying auction details */}
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedItem ? selectedItem.title : ''}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedItem ? selectedItem.imageUrl : ''}
                  alt={selectedItem ? selectedItem.title : ''}
                  className="img-fluid"
                />
                <p>{selectedItem ? selectedItem.description : ''}</p>
                <p>{selectedItem ? selectedItem.date : ''}</p>
                <p>Base Price: {selectedItem ? selectedItem.basePrice : ''}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button>Bid</Button>
                <Button style={{ background: 'red'}} onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

        <Modal show={showSignModal} onHide={handleSignClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? "Sign Up" : "Sign In"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="social-buttons">
            <Button variant="primary" className="social-btn google">
              Continue with Google
            </Button>
            <Button variant="dark" className="social-btn apple">
              Continue with Apple
            </Button>
          </div>

          <p className="or-text">OR</p>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="form-btn">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Form>

          <div className="toggle-link">
            {isSignUp ? (
              <p>
                Already have an account?{" "}
                <span onClick={toggleSignUp}>Sign In</span>
              </p>
            ) : (
              <p>
                Don't have an account? <span onClick={toggleSignUp}>Sign Up</span>
              </p>
            )}
          </div>
        </Modal.Body>
      </Modal>

            <footer className="footer">
                <p>&copy; 2024 BidSpirit. All rights reserved.</p>
            </footer>
        </Container>
        <Ticker/>
        </>
    );
};

export default Home;
