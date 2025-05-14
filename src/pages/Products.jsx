import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlaneDeparture, FaMapMarkedAlt, FaCompass, FaHiking } from 'react-icons/fa';

const TravelExperiences = () => {
  const travelExperiences = [
    {
      id: 1,
      title: 'Aventura en los Andes',
      description: 'Explora senderos montañosos y vive una experiencia inolvidable.',
      price: 249.99,
      features: ['Guía profesional', 'Equipo incluido', 'Comidas incluidas'],
      image: 'https://via.placeholder.com/300x200?text=Aventura+en+los+Andes'
    },
    {
      id: 2,
      title: 'Escapada a la Playa',
      description: 'Disfruta de arena blanca, aguas cristalinas y relax total.',
      price: 199.99,
      features: ['Alojamiento 3 días', 'Actividades acuáticas', 'Desayuno incluido'],
      image: 'https://via.placeholder.com/300x200?text=Escapada+a+la+Playa'
    },
    {
      id: 3,
      title: 'Tour Cultural en Europa',
      description: 'Descubre lo mejor del arte, historia y gastronomía europea.',
      price: 999.99,
      features: ['Guía en español', 'Entradas a museos', 'Transporte incluido'],
      image: 'https://via.placeholder.com/300x200?text=Tour+Cultural+Europa'
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5 text-primary">
        <FaPlaneDeparture className="me-2" />Experiencias de Viaje
      </h1>
      <Row className="g-4">
        {travelExperiences.map((experience) => (
          <Col key={experience.id} md={4}>
            <Card className="h-100 shadow border-0">
              <Card.Img variant="top" src={experience.image} />
              <Card.Body className="d-flex flex-column bg-light">
                <Card.Title className="text-center text-uppercase fw-bold text-success">
                  {experience.title}
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  {experience.description}
                </Card.Text>
                <ul className="list-unstyled mb-4">
                  {experience.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <FaCompass className="text-warning me-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto text-center">
                  <h4 className="mb-3 text-primary">${experience.price}</h4>
                  <Button variant="success" className="w-100">
                    Reservar Ahora
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TravelExperiences;
