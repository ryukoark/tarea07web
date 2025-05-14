import React from 'react';
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
  Dropdown,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <BootstrapNavbar bg="info" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold text-white">
          🌍 ViajaConNosotros
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="main-navbar" />
        <BootstrapNavbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link as={Link} to="/" className="text-white">Destinos</Nav.Link>
                <Nav.Link as={Link} to="/profile" className="text-white">Mi Cuenta</Nav.Link>
                {user.role === 'admin' && (
                  <Nav.Link as={Link} to="/admin" className="text-white">Panel Admin</Nav.Link>
                )}
                {(user.role === 'moderator' || user.role === 'admin') && (
                  <Nav.Link as={Link} to="/moderate" className="text-white">Moderación</Nav.Link>
                )}
              </>
            )}
          </Nav>
          <Nav>
            {user ? (
              <Dropdown align="end">
                <Dropdown.Toggle variant="outline-light" id="user-dropdown">
                  👤 {user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">Mi Cuenta</Dropdown.Item>
                  {user.role === 'admin' && (
                    <Dropdown.Item as={Link} to="/admin">Panel Admin</Dropdown.Item>
                  )}
                  {(user.role === 'moderator' || user.role === 'admin') && (
                    <Dropdown.Item as={Link} to="/moderate">Moderación</Dropdown.Item>
                  )}
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-light"
                  className="me-2"
                >
                  Iniciar Sesión
                </Button>
                <Button as={Link} to="/register" variant="light">
                  Únete
                </Button>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
