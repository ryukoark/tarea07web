import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaPlaneDeparture } from 'react-icons/fa';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Contraseña es requerida')
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '1rem'
      }}
    >
      <Card
        className="shadow-lg p-4"
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          border: 'none'
        }}
      >
        <div className="text-center mb-4">
          <FaPlaneDeparture size={48} color="#0d6efd" />
          <h2
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: '2rem',
              color: '#0d6efd',
              marginTop: '10px'
            }}
          >
            TravelPass
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555' }}>
            ¡Explora el mundo! Inicia sesión y prepara tu próximo destino
          </p>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const result = await login(values.email, values.password);
              if (result.success) {
                navigate('/');
              } else {
                setError(result.error);
              }
            } catch (err) {
              setError('Error al iniciar sesión');
            }
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <Field
                  name="email"
                  type="email"
                  className={`form-control border rounded-3 ${errors.email && touched.email ? 'is-invalid' : ''}`}
                />
                {errors.email && touched.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <Field
                  name="password"
                  type="password"
                  className={`form-control border rounded-3 ${errors.password && touched.password ? 'is-invalid' : ''}`}
                />
                {errors.password && touched.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-100 fw-bold"
                disabled={isSubmitting}
                style={{ borderRadius: '10px' }}
              >
                {isSubmitting ? 'Viajando...' : 'Iniciar Sesión'}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default Login;
