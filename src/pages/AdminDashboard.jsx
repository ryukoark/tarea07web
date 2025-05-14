import React from 'react';
import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaSuitcaseRolling, FaPlaneDeparture } from 'react-icons/fa';

const AdminDashboard = () => {
  const travelers = [
    { id: 1, name: 'Carlos Torres', email: 'carlos@viajes.com', role: 'turista' },
    { id: 2, name: 'Lucía Méndez', email: 'lucia@viajes.com', role: 'guía' },
    { id: 3, name: 'Pedro Díaz', email: 'pedro@viajes.com', role: 'admin' }
  ];

  const trips = [
    { id: 1, title: 'Explorando Machu Picchu', bookings: 120, status: 'activo', guide: 'Lucía Méndez' },
    { id: 2, title: 'Ruta por Europa Central', bookings: 95, status: 'activo', guide: 'Pedro Díaz' },
    { id: 3, title: 'Safari en Kenia', bookings: 30, status: 'inactivo', guide: 'Carlos Torres' }
  ];

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-primary">Panel de Viajes</h1>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-white" style={{ backgroundColor: '#1e81b0' }}>
            <Card.Body>
              <Card.Title><FaMapMarkerAlt className="me-2" />Destinos Activos</Card.Title>
              <Card.Text className="display-4">145</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white" style={{ backgroundColor: '#e28743' }}>
            <Card.Body>
              <Card.Title><FaSuitcaseRolling className="me-2" />Reservas</Card.Title>
              <Card.Text className="display-4">3,200</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-white" style={{ backgroundColor: '#3b8b3b' }}>
            <Card.Body>
              <Card.Title><FaPlaneDeparture className="me-2" />Salidas Programadas</Card.Title>
              <Card.Text className="display-4">278</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h4>Gestión de Usuarios</h4>
            </Card.Header>
            <Card.Body>
              <Table striped hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {travelers.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <Badge bg={
                          user.role === 'admin' ? 'dark' :
                          user.role === 'guía' ? 'info' : 'secondary'
                        }>
                          {user.role}
                        </Badge>
                      </td>
                      <td>
                        <Button variant="outline-info" size="sm" className="me-2">Editar</Button>
                        <Button variant="outline-danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header>
              <h4>Gestión de Viajes</h4>
            </Card.Header>
            <Card.Body>
              <Table striped hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Destino</th>
                    <th>Reservas</th>
                    <th>Estado</th>
                    <th>Guía</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {trips.map(trip => (
                    <tr key={trip.id}>
                      <td>{trip.id}</td>
                      <td>{trip.title}</td>
                      <td>{trip.bookings}</td>
                      <td>
                        <Badge bg={trip.status === 'activo' ? 'success' : 'danger'}>
                          {trip.status}
                        </Badge>
                      </td>
                      <td>{trip.guide}</td>
                      <td>
                        <Button variant="outline-info" size="sm" className="me-2">Editar</Button>
                        <Button variant="outline-danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
