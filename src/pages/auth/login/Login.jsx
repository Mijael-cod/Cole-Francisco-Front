import Navbar from "../../../shared/navbar/public/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="card-body">
            <h1 className="card-title text-center mb-4">Iniciar Sesión</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
              </div>
              <div className="d-grid">
                <Link to="/private/admin/dashboard" className="btn btn-primary">Iniciar Sesión</Link>
              </div>
            </form>
            <div className="text-center mt-3">
              <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
