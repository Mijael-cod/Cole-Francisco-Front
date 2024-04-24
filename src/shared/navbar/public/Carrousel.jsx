import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModernNavbar() {
    return (
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div className="carousel-item active">
                    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 1" />
               </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 3" />
                </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default ModernNavbar;