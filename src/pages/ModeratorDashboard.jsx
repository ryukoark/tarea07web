import React from 'react';
import { Container, Row, Col, Card, Table, Button, Badge } from 'react-bootstrap';
import {
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaEye,
  FaClock,
  FaPlaneDeparture,
  FaGlobeAmericas,
  FaUser
} from 'react-icons/fa';

const ModeratorDashboard = () => {
  const reports = [
    { id: 1, user: 'Viajero 1', type: 'Contenido inapropiado', status: 'Pendiente', date: '2024-05-05' },
    { id: 2, user: 'Explorador 2', type: 'Publicidad engañosa', status: 'En revisión', date: '2024-05-04' },
    { id: 3, user: 'Aventurero 3', type: 'Ubicación falsa', status: 'Resuelto', date: '2024-05-03' }
  ];

  const getStatusBadge = (status) => {
    const variants = {
      'Pendiente': 'danger',
      'En revisión': 'warning',
      'Resuelto': 'success'
    };
    return <Badge bg={variants[status]}>{status}</Badge>;
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center text-info">
        <FaGlobeAmericas className="me-2" />
        Panel de Moderación Turística
      </h1>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="bg-info text-white shadow-sm">
            <Card.Body>
              <Card.Title><FaPlaneDeparture className="me-2" /> Reportes Nuevos</Card.Title>
              <Card.Text className="display-5 fw-bold text-center">17</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-warning text-dark shadow-sm">
            <Card.Body>
              <Card.Title><FaClock className="me-2" /> En Evaluación</Card.Title>
              <Card.Text className="display-5 fw-bold text-center">6</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-success text-white shadow-sm">
            <Card.Body>
              <Card.Title><FaCheckCircle className="me-2" /> Resueltos Hoy</Card.Title>
              <Card.Text className="display-5 fw-bold text-center">9</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="shadow bg-light text-dark">
        <Card.Header className="border-0 bg-primary text-white">
          <h4><FaMapMarkedAlt className="me-2" /> Revisión de Lugares y Contenido</h4>
        </Card.Header>
        <Card.Body>
          <Table striped hover responsive variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Tipo de Reporte</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td><FaUser className="me-1" /> {report.user}</td>
                  <td>{report.type}</td>
                  <td>{getStatusBadge(report.status)}</td>
                  <td>{report.date}</td>
                  <td>
                    <Button variant="info" size="sm" className="me-2"><FaEye /></Button>
                    <Button variant="success" size="sm" className="me-2"><FaCheckCircle /></Button>
                    <Button variant="danger" size="sm"><FaExclamationTriangle /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="shadow bg-white text-dark">
            <Card.Header className="bg-info text-white border-0">
              <h4><FaGlobeAmericas className="me-2" /> Estadísticas de Viajes</h4>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <span>Destinos Subidos Hoy:</span>
                <strong>134</strong>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tiempo Promedio de Visualización:</span>
                <strong>5.2 min</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Publicaciones Eliminadas:</span>
                <strong>11</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ModeratorDashboard;
