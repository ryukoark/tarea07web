# PerritoSerio - Sistema de Cupones de Apuestas

Aplicación web para la gestión de cupones de apuestas con autenticación y roles de usuario.

## Características

- Autenticación de usuarios (login/registro)
- Validación de formularios en el frontend
- Navegación basada en roles (admin, moderador, usuario)
- Interfaz moderna para la visualización de cupones
- Conexión con backend MySQL

## Requisitos Previos

- Node.js (v14 o superior)
- MySQL (XAMPP)
- npm o yarn

## Configuración

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Configurar la base de datos:
- Asegúrate de que XAMPP esté corriendo
- Crear una base de datos llamada `perritoserio` en MySQL
- El backend se conectará al puerto 3306

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
src/
  ├── components/     # Componentes reutilizables
  ├── context/        # Contextos de React
  ├── pages/          # Páginas de la aplicación
  └── main.jsx        # Punto de entrada
```

## Tecnologías Utilizadas

- React
- Vite
- React Router
- Bootstrap
- Formik & Yup
- Axios
- MySQL

## Roles de Usuario

- **Administrador**: Acceso completo al sistema
- **Moderador**: Puede moderar contenido
- **Usuario**: Acceso básico a los cupones 