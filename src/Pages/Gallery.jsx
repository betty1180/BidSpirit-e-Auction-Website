import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./Gallery.css";
import $ from "jquery";

//jQuery
const App = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const images = [
    "/Images/antique 1.jpg",
    "/Images/antique 2.jpg",
    "/Images/antique 3.jpg",
    "/Images/antique 4.jpg",
    "/Images/antique 5.jpg",
    "/Images/antique 6.jpg",
    "/Images/collectible 1.jpg",
    "/Images/collectible 2.jpg",
    "/Images/collectible 3.jpg",
    "/Images/collectible 4.jpg",
    "/Images/collectible 5.jpg",
    "/Images/collectible 6.jpg",
    "/Images/fine art 1.jpg",
    "/Images/fine art 2.jpg",
    "/Images/fine art 3.jpg",
    "/Images/fine art 4.jpg",
    "/Images/fine art 5.jpg",
    "/Images/fine art 6.jpg",
    "/Images/furniture 1.jpg",
    "/Images/furniture 2.jpg",
    "/Images/furniture 3.jpg",
    "/Images/furniture 4.jpg",
    "/Images/furniture 5.jpg",
    "/Images/furniture 6.jpg",
  ];

  // Hover effect using jQuery on component mount
  React.useEffect(() => {
    $(".gallery-item").hover(
      function () {
        $(this).addClass("hovered");
      },
      function () {
        $(this).removeClass("hovered");
      }
    );
  }, []);

  return (
    <Container className="gallery-container">
        <h1>Gallery</h1>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={6} md={4} className="mb-4">
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="img-fluid gallery-item"
              onClick={() => handleShow(image)}
            />
          </Col>
        ))}
      </Row>

      {/* Modal Popup */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="img-fluid"
              style={{ width: "100%" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;
