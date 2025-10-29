import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Sitemap.css'; // Importing CSS
import $ from 'jquery'; // Importing jQuery



const Sitemap = () => {

  // jQuery functionality
    const handleAnimation = () => {
    $('#sitemap-info').fadeIn(1000);
    };

    return (
        <Container className="sitemap-container" id='sitemap-info' onLoad={handleAnimation}>
            <h3 className="text-center text-light">Sitemap</h3>
            <ListGroup>
                <ListGroup.Item>
                    <Link to="home" className='link'>Home</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="auctions" className='link'>Auctions</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="gallery" className='link'>Gallery</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="about" className='link'>About Us</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="contact" className='link'>Contact Us</Link>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Sitemap;
