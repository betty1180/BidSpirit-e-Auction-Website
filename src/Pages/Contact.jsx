import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import $ from 'jquery'; // Importing jQuery
import './Contact.css';

const Contact = () => {
    //jQuery functionality
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        $('#contact-form')[0].reset(); // Reset the form after submission
    };

    return ( 
        <Container className='container'>
            <h1>Contact Us</h1>
            <Form id="contact-form" onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required className='form-email'/>
                </Form.Group>

                <p className='contact-info'>
                Contact Number: +234 8012 345 6789  <br />Email ID: bidspirit@gmail.com <br />Address: 3rd Avenue, Gwarimpa, Abuja, Nigeria
                </p>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Your message" required className='form-control'/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
