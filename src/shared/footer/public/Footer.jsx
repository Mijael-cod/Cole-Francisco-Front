import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
       
        <div className='navbar-color'>
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img className='img-fluid' src="src/assets/escudo_colegio.png" alt="" style={{ width: '50px', height: 'auto' }} />
                    </a>
                    <span class=" text-white">© 2021 Colegio Francisco Bolognesi</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <img className='img-fluid me-2' src="src/assets/facebook.png" alt="" style={{ width: '25px', height: 'auto' }} />
                    <img className='img-fluid me-2' src="src/assets/instagram.png" alt="" style={{ width: '25px', height: 'auto' }} />
                    <img className='img-fluid' src="src/assets/twiter.png" alt="" style={{ width: '25px', height: 'auto' }} />
                </ul>
            </footer>
        </div>

        </div>


    );
}

export default Footer;

