import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { FaUserEdit, FaKey, FaGlobe, FaMapMarkedAlt, FaPlane } from 'react-icons/fa';

const UserProfile = () => {
  const userTrips = [
    { id: 1, destination: 'París, Francia', travelDate: '2024-05-01', status: 'Completado', expires: '2024-06-01' },
    { id: 2, destination: 'Tokio, Japón', travelDate: '2024-04-15', status: 'Completado', expires: '2024-05-15' },
    { id: 3, destination: 'Cusco, Perú', travelDate: '2024-03-20', status: 'Cancelado', expires: '2024-04-20' }
  ];

  const getStatusBadge = (status) => {
    const variants = {
      'Completado': 'success',
      'Cancelado': 'danger',
      'Pendiente': 'warning'
    };
    return <Badge bg={variants[status]}>{status}</Badge>;
  };

  return (
    <div style={{ background: '#e0f7fa', color: '#004d40', minHeight: '100vh', paddingTop: '2rem' }}>
      <Container>
        <Row>
          <Col md={4}>
            <Card bg="light" text="dark" className="mb-4 border-0 shadow-sm">
              <Card.Body className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                  alt="Avatar"
                  className="rounded-circle mb-3"
                  style={{ width: '130px', height: '130px' }}
                />
                <h4>@travelExplorer</h4>
                <p className="text-muted">explorer@email.com</p>
                <Button variant="info" className="w-100 mb-2"><FaUserEdit /> Editar Perfil</Button>
                <Button variant="outline-dark" className="w-100"><FaKey /> Cambiar Contraseña</Button>
              </Card.Body>
            </Card>

            <Card bg="light" text="dark" className="border-0 shadow-sm">
              <Card.Header className="bg-info text-white">
                <h5 className="mb-0"><FaGlobe /> Mi Bitácora de Viajes</h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light text-dark">
                    Viajes Completados
                    <Badge bg="success">2</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light text-dark">
                    Plan de Viaje
                    <Badge bg="info">Global Explorer</Badge>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light text-dark">
                    Miembro desde
                    <span>Febrero 2024</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card bg="light" text="dark" className="mb-4 border-0 shadow-sm">
              <Card.Header className="bg-info text-white">
                <h4 className="mb-0"><FaMapMarkedAlt /> Viajes Recientes</h4>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {userTrips.map(trip => (
                    <ListGroup.Item key={trip.id} className="bg-light text-dark">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5>{trip.destination}</h5>
                          <small className="text-muted">
                            Fecha del viaje: {trip.travelDate} | Válido hasta: {trip.expires}
                          </small>
                        </div>
                        <div>
                          {getStatusBadge(trip.status)}
                          <Button variant="outline-primary" size="sm" className="ms-2">
                            Detalles
                          </Button>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            <Card bg="light" text="dark" className="border-0 shadow-sm">
              <Card.Header className="bg-info text-white">
                <h4 className="mb-0"><FaPlane /> Historial de Viajes</h4>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light text-dark">
                    <div>
                      <h6 className="mb-0">París, Francia</h6>
                      <small className="text-muted">01/05/2024</small>
                    </div>
                    <div>
                      <Badge bg="success">Completado</Badge>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center bg-light text-dark">
                    <div>
                      <h6 className="mb-0">Tokio, Japón</h6>
                      <small className="text-muted">15/04/2024</small>
                    </div>
                    <div>
                      <Badge bg="success">Completado</Badge>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
