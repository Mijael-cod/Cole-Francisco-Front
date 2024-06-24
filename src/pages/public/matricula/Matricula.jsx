import React, { useState } from 'react';
import Navbar from "../../../shared/navbar/public/Navbar";

export default function Matricula() {
  const [formValues, setFormValues] = useState({
    urlCopiaDni: '',
    urlConstancia: '',
    urlLibreta: '',
    nombreApoderado: '',
    apellidoPaternoApoderado: '',
    apellidoMaternoApoderado: '',
    dniApoderado: '',
    fechaNacimientoApoderado: '',
    numeroCelularApoderado: '',
    edadEstudiante: '',
    sexoEstudiante: '',
    nombreEstudiante: '',
    apellidoPaternoEstudiante: '',
    apellidoMaternoEstudiante: '',
    dniEstudiante: '',
    fechaNacimientoEstudiante: '',
    numeroCelularEstudiante: '',
    idGrado: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [id]: files[0] ? files[0].name : ''
    }));
  };

  const handleSubmit = async () => {
    console.log('Submitting form...');
    
    // Verificar que todos los campos estén llenos
    for (const [key, value] of Object.entries(formValues)) {
      if (!value) {
        alert(`Por favor, completa el campo: ${key}`);
        return;
      }
    }

    const data = { ...formValues };
    console.log('Form Data:', data);

    try {
      const response = await fetch('http://localhost:8080/api/matriculas/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Success:', responseData);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-5">
        <form>
          <div className="row">
            <div className="col-md-6">
              <h2>Datos del Alumno</h2>
              <div className="mb-3">
                <label htmlFor="nombreEstudiante" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombreEstudiante" placeholder="Nombre del estudiante" value={formValues.nombreEstudiante} onChange={handleInputChange} />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellidoPaternoEstudiante" className="form-label">Apellido Paterno</label>
                  <input type="text" className="form-control" id="apellidoPaternoEstudiante" placeholder="Apellido paterno del estudiante" value={formValues.apellidoPaternoEstudiante} onChange={handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellidoMaternoEstudiante" className="form-label">Apellido Materno</label>
                  <input type="text" className="form-control" id="apellidoMaternoEstudiante" placeholder="Apellido materno del estudiante" value={formValues.apellidoMaternoEstudiante} onChange={handleInputChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="dniEstudiante" className="form-label">DNI</label>
                  <input type="text" className="form-control" id="dniEstudiante" placeholder="DNI del estudiante" value={formValues.dniEstudiante} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="fechaNacimientoEstudiante" className="form-label">Fecha de Nacimiento</label>
                  <input type="date" className="form-control" id="fechaNacimientoEstudiante" value={formValues.fechaNacimientoEstudiante} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="numeroCelularEstudiante" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="numeroCelularEstudiante" placeholder="Teléfono del estudiante" value={formValues.numeroCelularEstudiante} onChange={handleInputChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="sexoEstudiante" className="form-label">Sexo</label>
                  <select className="form-select" id="sexoEstudiante" value={formValues.sexoEstudiante} onChange={handleInputChange}>
                    <option value="">Selecciona un sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="edadEstudiante" className="form-label">Edad</label>
                  <input type="number" className="form-control" id="edadEstudiante" placeholder="Edad del estudiante" value={formValues.edadEstudiante} onChange={handleInputChange} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="idGrado" className="form-label">Grado</label>
                <select className="form-select" id="idGrado" value={formValues.idGrado} onChange={handleInputChange}>
                  <option value="">Selecciona un grado</option>
                  <option value="1">Primer Grado</option>
                  <option value="2">Segundo Grado</option>
                  <option value="3">Tercer Grado</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Contacto del Apoderado</h2>
              <div className="mb-3">
                <label htmlFor="nombreApoderado" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombreApoderado" placeholder="Nombre del apoderado" value={formValues.nombreApoderado} onChange={handleInputChange} />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellidoPaternoApoderado" className="form-label">Apellido Paterno</label>
                  <input type="text" className="form-control" id="apellidoPaternoApoderado" placeholder="Apellido paterno del apoderado" value={formValues.apellidoPaternoApoderado} onChange={handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellidoMaternoApoderado" className="form-label">Apellido Materno</label>
                  <input type="text" className="form-control" id="apellidoMaternoApoderado" placeholder="Apellido materno del apoderado" value={formValues.apellidoMaternoApoderado} onChange={handleInputChange} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="dniApoderado" className="form-label">DNI</label>
                  <input type="text" className="form-control" id="dniApoderado" placeholder="DNI del apoderado" value={formValues.dniApoderado} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="fechaNacimientoApoderado" className="form-label">Fecha de Nacimiento</label>
                  <input type="date" className="form-control" id="fechaNacimientoApoderado" value={formValues.fechaNacimientoApoderado} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="numeroCelularApoderado" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="numeroCelularApoderado" placeholder="Teléfono del apoderado" value={formValues.numeroCelularApoderado} onChange={handleInputChange} />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="urlConstancia" className="form-label">Adjuntar Constancia</label>
                <input type="file" className="form-control" id="urlConstancia" onChange={handleFileChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="urlLibreta" className="form-label">Adjuntar Boleta de Notas</label>
                <input type="file" className="form-control" id="urlLibreta" onChange={handleFileChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="urlCopiaDni" className="form-label">Adjuntar Copia de DNI</label>
                <input type="file" className="form-control" id="urlCopiaDni" onChange={handleFileChange} />
              </div>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary" type="button" onClick={handleSubmit}>Enviar</button>
              </div>
            </div>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}
