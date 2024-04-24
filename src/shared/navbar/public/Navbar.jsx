import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModernNavbar() {
    return (
        <nav className='navbar-color'>
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img className='img-fluid' src="src/assets/escudo_colegio.png" alt="" style={{ width: '90px', height: 'auto' }} />
                        <span className="ms-2 text-white">Colegio Francisco Bolognesi</span>
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-3 text-white">Inicio</a></li>
                        <li><a href="#" class="nav-link px-3 text-white">Nosotros</a></li>
                        <li><a href="#" class="nav-link px-3 text-white">Galeria</a></li>
                        <li><a href="#" class="nav-link px-3 text-white">Matricula</a></li>
                    </ul>

                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn-outline-secondary me-2 text-white">Iniciar Sesión</button>
                        {/* <button type="button" class="btn btn-primary">Registrarse</button> */}
                    </div>
                </header>
            </div>
        </nav>
    );
}

export default ModernNavbar;
