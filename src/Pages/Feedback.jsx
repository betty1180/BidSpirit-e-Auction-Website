import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import $ from 'jquery';
import './Feedback.css'; // Importing CSS

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
    });
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!formData.name || !formData.email || !formData.feedback) {
            setAlertMessage('Please fill in all fields.');
            setShowAlert(true);
            return;
        }

        // Simulate form submission
        console.log('Feedback submitted:', formData);
        setAlertMessage('Thank you for your feedback!');
        setShowAlert(true);
        setFormData({ name: '', email: '', feedback: '' }); // Reset form

        // jQuery animation for feedback alert
        setTimeout(() => {
            $('#feedbackAlert').fadeOut();
        }, 3000);
    };

    return (
        <Container className="feedback-container">
            <h1 className="text-center">Feedback</h1>
            {showAlert && (
                <Alert variant="info" id="feedbackAlert">
                    {alertMessage}
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <div className="space-b"></div>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <div className="space-b"></div>

                <Form.Group controlId="formFeedback">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Feedback;
