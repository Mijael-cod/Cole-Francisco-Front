import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex flex-column w-100">
        <Navbar />
        <div className="container-fluid p-4">
          <h1>Bienvenido al Dashboard</h1>
          <p>Contenido principal aquí...</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h4 className="text-center">Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/profile" className="nav-link text-white">Perfil</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/settings" className="nav-link text-white">Configuración</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/logout" className="nav-link text-white">Cerrar Sesión</Link>
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Aplicación</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">Configuración</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Cerrar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
