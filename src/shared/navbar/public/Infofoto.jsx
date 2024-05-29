import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ModernNavbar() {
  return (
    <div className="m-5">
      <div className="container-fluid text-center">
        <h1>Disponemos de 3 lugares educativos</h1>

        <p>Una educación de calidad para la formación de la persona en todos los campos del conocimiento.</p>
            <p>Basada en una preparación humorista, científica y artística.</p>
        <div className="row g-5">
        <div className="col position-relative">
    <div className="p-4 rounded-3" style={{ backgroundColor: '#FEBF01', boxShadow: '0 16px 24px rgba(0, 0, 0, 0.4)' }}>
        <div className="aspect-ratio aspect-ratio-square" style={{ height:'240px', maxHeight: '340px' }}>
            <img src="https://i.imgur.com/zmuW0PO.jpeg" alt="Imagen" style={{ height:'90%', maxHeight: '340px' }} className="aspect-ratio-item img-fluid mb-3"/>
        </div>
        <h5 className="text-dark">INICIAL</h5>
    </div>
    </div>
          <div className="col position-relative">
    <div className="p-4 rounded-3" style={{ backgroundColor: '#57D742', boxShadow: '0 16px 24px rgba(0, 0, 0, 0.4)' }}>
        <div className="aspect-ratio aspect-ratio-square" style={{ height:'240px', maxHeight: '340px' }}>
            <img src="https://i.imgur.com/wttSwn9.jpeg" alt="Imagen" style={{ height:'90%', maxHeight: '340px' }} className="aspect-ratio-item img-fluid mb-3"/>
        </div>
        <h5 className="text-dark">PRIMARIA</h5>
    </div>
    </div>
          <div className="col position-relative">
    <div className="p-4 rounded-3" style={{ backgroundColor: '#19B5FA', boxShadow: '0 16px 24px rgba(0, 0, 0, 0.4)' }}>
        <div className="aspect-ratio aspect-ratio-square" style={{ height:'240px', maxHeight: '340px' }}>
            <img src="https://i.imgur.com/B7PCOj0.jpeg" alt="Imagen" style={{ height:'90%', maxHeight: '340px' }} className="aspect-ratio-item img-fluid mb-3"/>
        </div>
        <h5 className="text-dark text-">SECUNDARIA</h5>
    </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default ModernNavbar;
