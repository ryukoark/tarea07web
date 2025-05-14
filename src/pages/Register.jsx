import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaKey, FaGlobeAmericas } from 'react-icons/fa';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('Nombre es requerido'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Contraseña es requerida'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirmar contraseña es requerido')
});

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');

  return (
    <div style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      paddingTop: '60px'
    }}>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <Card className="p-4 shadow-lg border-0 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.92)', width: '100%', maxWidth: '500px' }}>
          <Card.Body>
            <h2 className="text-center mb-4 fw-bold text-primary"><FaGlobeAmericas className="me-2" />Únete a la Aventura</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={RegisterSchema}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const { confirmPassword, ...userData } = values;
                  const result = await register(userData);
                  if (result.success) {
                    navigate('/');
                  } else {
                    setError(result.error);
                  }
                } catch (err) {
                  setError('Error al registrar');
                }
                setSubmitting(false);
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <div className="input-group">
                      <span className="input-group-text bg-warning text-white"><FaUser /></span>
                      <Field
                        name="name"
                        type="text"
                        className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
                      />
                      {errors.name && touched.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-group">
                      <span className="input-group-text bg-warning text-white"><FaEnvelope /></span>
                      <Field
                        name="email"
                        type="email"
                        className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                      />
                      {errors.email && touched.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <div className="input-group">
                      <span className="input-group-text bg-warning text-white"><FaLock /></span>
                      <Field
                        name="password"
                        type="password"
                        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                      />
                      {errors.password && touched.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                    <div className="input-group">
                      <span className="input-group-text bg-warning text-white"><FaKey /></span>
                      <Field
                        name="confirmPassword"
                        type="password"
                        className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Explorando...' : 'Registrarse y Empezar el Viaje'}
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
