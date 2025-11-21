import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Auctions.css'; // Importing CSS

// Sample data for the auctions
const fineArt = [
    {
        id: 1, 
        title: 'Farm Landscape painting',
        description: 'A beautiful farm painting from the 19th century by Thomas Gilbert.',
        basePrice: '$600',
        imageUrl: '/Images/fine art 1.jpg',
    },
    {
        id: 2, 
        title: 'House in Garden Painting',
        description: 'A painting of a house in a beautiful garden made in the 19th century.',
        basePrice: '$500',
        imageUrl: '/Images/fine art 2.jpg',
    },
    {
        id: 3,
        title: 'Painting of a palace maid',
        description: 'This painting was made in the 20th century by Chloe Jones.',
        basePrice: '$700',
        imageUrl: '/Images/fine art 3.jpg',
    },
    {
        id: 4,
        title: 'Spring Painting',
        description: 'A beautiful painting made by Beth Anderson from the 18th century in Nigeria.',
        basePrice: '$800',
        imageUrl: '/Images/fine art 4.jpg',
    },
    {
        id: 5,
        title: 'A village street painting',
        description: 'This painting was made in the 20th century by Thomas Gilbert in Nigeria.',
        basePrice: '$700',
        imageUrl: '/Images/fine art 5.jpg',
    },
    {
        id: 6,
        title: 'Rose painting',
        description: 'This painting was made in the early 1980s.',
        basePrice: '$1,000',
        imageUrl: '/Images/fine art 6.jpg',
    },
];

const antiques = [
    {
        id: 1,
        title: 'Old Camera',
        description: 'This camera was used in the early 1880s and still works perfectly well.',
        basePrice: '$1,000',
        imageUrl: '/Images/antique 1.jpg',
    },
    {
        id: 2, 
        title: 'Eagle Head Staff',
        description: 'This staff was used by a king in 1988 in Nigeria.',
        basePrice: '$900',
        imageUrl: '/Images/antique 2.jpg',
    },
    {
        id: 3,
        title: 'Compass',
        description: 'This compass was used by a lost man in 1988 to find his destination.',
        basePrice: '$500',
        imageUrl: '/Images/antique 3.jpg',
    },
    {
        id: 4,
        title: 'Old Clock',
        description: 'This clock was used back in the 1880s but works well now.',
        basePrice: '$800',
        imageUrl: '/Images/antique 4.jpg',
    },
    {
        id: 5,
        title: 'Kettle',
        description: 'This kettle was used in a palace and is still in good shape.',
        basePrice: '$100',
        imageUrl: '/Images/antique 5.jpg',
    },
    {
        id: 6,
        title: 'Old Radio',
        description: 'This radio was used in the 1990s and still works well.',
        basePrice: '$200',
        imageUrl: '/Images/antique 6.jpg',
    },
];

const furniture = [
    {
        id: 1,
        title: 'A set of office table with chairs',
        description: 'This set consists of an office table and sixteen chairs.',
        basePrice: '$2,000',
        imageUrl: '/Images/furniture 1.jpg',
    },
    {
        id: 2, 
        title: 'White and Green Set of Chairs',
        description: 'A set of three white and two green chairs that can be used in the office or at home. Made in USA',
        basePrice: '$1,000',
        imageUrl: '/Images/furniture 2.jpg',
    },
    {
        id: 3,
        title: 'Gray Office Table Set with Chairs',
        description: 'A set of office table and six chairs made in Italy.',
        basePrice: '$1,000',
        imageUrl: '/Images/furniture 3.jpg',
    },
    {
        id: 4,
        title: 'A set of office table and chairs',
        description: 'This set consists of an office table and eight chairs.',
        basePrice: '$1,000',
        imageUrl: '/Images/furniture 4.jpg',
    },
    {
        id: 5,
        title: 'A set of office chairs and table',
        description: 'This set consists of a brown office table and eight chairs.',
        basePrice: '$1000',
        imageUrl: '/Images/furniture 5.jpg',
    },
    {
        id: 6,
        title: 'A single couch',
        description: 'An ash three-seater couch made in Italy.',
        basePrice: '$500',
        imageUrl: '/Images/furniture 6.jpg',
    },
];

const collectibles = [
    {
        id: 1,
        title: 'An ancient genie lamp',
        description: 'This was owned by a king in the 18th century. It can be used in a museum or for educational purposes.',
        basePrice: '$5,000',
        imageUrl: '/Images/collectible 1.jpg',
    },
    {
        id: 2, 
        title: 'A set of ancient cups and kettle',
        description: 'This consists of a set of four brown ancient cups and three kettles.',
        basePrice: '$500',
        imageUrl: '/Images/collectible 2.jpg',
    },
    {
        id: 3,
        title: 'Old coffee grinder',
        description: 'This is a coffee grinder that was made in the late 80s in the UK.',
        basePrice: '$700',
        imageUrl: '/Images/collectible 3.jpg',
    },
    {
        id: 4,
        title: 'Coffee Grinder',
        description: 'This coffee grinder works as a coffee grinder and coffee maker. It was made in USA in 1994',
        basePrice: '$500',
        imageUrl: '/Images/collectible 4.jpg',
    },
    {
        id: 5,
        title: 'Ancient Cups',
        description: 'A set of three cups made in 1883 in Denmark.',
        basePrice: '$300',
        imageUrl: '/Images/collectible 5.jpg',
    },
];

const sponsored = [
    {
        id: 1,
        title: 'White and Green Set of Chairs',
        description: 'A set of three white and two green chairs that can be used in the office or at home. Made in USA',
        basePrice: '$1,000',
        imageUrl: '/Images/furniture 2.jpg',
        date: 'Starts in 3d 5h 30mins'
    },
    {
        id: 2, 
        title: 'Gray Office Table Set with Chairs',
        description: 'A set of office table and six chairs made in Italy.',
        basePrice: '$1,000',
        imageUrl: '/Images/furniture 3.jpg',
        date: 'Starts in 3d 5h 30mins'
    },
    {
        id: 3,
        title: 'An ancient genie lamp',
        description: 'This was owned by a king in the 18th century. It can be used in a museum or for educational purposes.',
        basePrice: '$5,000',
        imageUrl: '/Images/collectible 1.jpg',
        date: 'Starts in 3d 5h 30mins'
    },
    {
        id: 4,
        title: 'Old coffee grinder',
        description: 'This is a coffee grinder that was made in the late 80s in the UK.',
        basePrice: '$700',
        imageUrl: '/Images/collectible 3.jpg',
        date: 'Starts in 3d 5h 30mins'
    },
    {
        id: 5,
        title: 'Painting of a palace maid',
        description: 'This painting was made in the 20th century by Chloe Jones.',
        basePrice: '$700',
        imageUrl: '/Images/fine art 3.jpg',
        date: 'Starts in 3d 5h 30mins'
    },
];

const completed = [
    {
        id: 1,
        title: 'A set of office table with chairs',
        description: 'This set consists of an office table and sixteen chairs.',
        basePrice: '$2,000',
        imageUrl: '/Images/furniture 1.jpg',
        date: 'Ended: 1st October, 2024'
    },
    {
        id: 2, 
        title: 'A set of office chairs and table',
        description: 'This set consists of a brown office table and eight chairs.',
        basePrice: '$1000',
        imageUrl: '/Images/furniture 5.jpg',
        date: 'Ended: 1st October, 2024'
    },
    {
        id: 3,
        title: 'A village street painting',
        description: 'This painting was made in the 20th century by Thomas Gilbert in Nigeria.',
        basePrice: '$700',
        imageUrl: '/Images/fine art 5.jpg',
        date: 'Ended: 1st October, 2024'
    },
    {
        id: 4,
        title: 'Coffee Grinder',
        description: 'This coffee grinder works as a coffee grinder and coffee maker. It was made in USA in 1994',
        basePrice: '$500',
        imageUrl: '/Images/collectible 4.jpg',
        date: 'Ended: 1st October, 2024'
    },
    {
        id: 5,
        title: 'Ancient Cups',
        description: 'A set of three cups made in 1883 in Denmark.',
        basePrice: '$300',
        imageUrl: '/Images/collectible 5.jpg',
        date: 'Ended: 1st October, 2024'
    },
];


const Auctions = () => {
    //jQuery functionality
    // const handleAnimation = () => {
    //     $('#auctions-info').fadeIn(500); 
    // };

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

    return (
        <Container className="auctions-container" id='auctions-info'>
            <h1 className="text-center">Popular Auctions</h1>
            <h3>Fine Art</h3>
            <Row>
                {fineArt.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="auction-card" onClick={() => handleShow(item)}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Base Price: {item.basePrice}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className='space'></div>
            <h3>Antiques</h3>
            <Row>
                {antiques.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="auction-card" onClick={() => handleShow(item)}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Base Price: {item.basePrice}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className='space'></div>
            <h3>Furniture</h3>
            <Row>
                {furniture.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="auction-card" onClick={() => handleShow(item)}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Base Price: {item.basePrice}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className='space'></div>
            <h3>Collectibles</h3>
            <Row>
                {collectibles.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="auction-card" onClick={() => handleShow(item)}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Base Price: {item.basePrice}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className='space'></div>
            <h1 className="text-center">Sponsored Auctions</h1>
            <Row>
                {sponsored.map((item) => (
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

            <div className='space'></div>
            <h1 className="text-center">Completed Auctions</h1>
            <Row>
                {completed.map((item) => (
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



            {/* Modal for auction item details. This displays an item an its details after clicking on it */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedItem ? selectedItem.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedItem ? selectedItem.imageUrl : ''} alt={selectedItem ? selectedItem.title : ''} className="img-fluid mb-3" />
                    <p>{selectedItem ? selectedItem.description : ''}</p>
                    <h5>Base Price: {selectedItem ? selectedItem.basePrice : ''}</h5>
                </Modal.Body>
                <Modal.Footer>
                <Button>Bid</Button>
                <Button style={{ background: 'red'}} onClick={handleClose}>
                  Close
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Auctions;
