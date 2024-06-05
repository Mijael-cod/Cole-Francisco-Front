import React, { useState } from 'react';
import Navbar from "../../../shared/navbar/public/Navbar";

export default function Matricula() {
  const [formValues, setFormValues] = useState({
    documentoCrearDto: {
      urlConstancia: '',
      urlLibreta: '',
      urlCopiaDni: ''
    },
    apoderadoDto: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      dni: '',
      fechaNacimiento: '',
      numeroCelular: ''
    },
    crearEstudianteDto: {
      persona: {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        dni: '',
        fechaNacimiento: '',
        numeroCelular: ''
      },
      edad: '',
      sexo: ''
    },
    idGrado: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const [parentKey, childKey] = id.split('.');
    if (childKey) {
      setFormValues(prevState => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value
        }
      }));
    } else {
      setFormValues(prevState => ({
        ...prevState,
        [id]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    const [parentKey, childKey] = id.split('.');
    if (childKey) {
      setFormValues(prevState => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: files[0] ? files[0].name : ''
        }
      }));
    }
  };

  const handleSubmit = async () => {
    console.log('Submitting form...');
    const data = { ...formValues };
    console.log('Form Data:', data);

    try {
      const response = await fetch('https://testing-colegio-5.onrender.com/api/matriculas', {
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
                <label htmlFor="crearEstudianteDto.persona.nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="crearEstudianteDto.persona.nombre" placeholder="Nombre del estudiante" value={formValues.crearEstudianteDto.persona.nombre} onChange={handleInputChange} />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="crearEstudianteDto.persona.apellidoPaterno" className="form-label">Apellido Paterno</label>
                  <input type="text" className="form-control" id="crearEstudianteDto.persona.apellidoPaterno" placeholder="Apellido paterno del estudiante" value={formValues.crearEstudianteDto.persona.apellidoPaterno} onChange={handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="crearEstudianteDto.persona.apellidoMaterno" className="form-label">Apellido Materno</label>
                  <input type="text" className="form-control" id="crearEstudianteDto.persona.apellidoMaterno" placeholder="Apellido materno del estudiante" value={formValues.crearEstudianteDto.persona.apellidoMaterno} onChange={handleInputChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="crearEstudianteDto.persona.dni" className="form-label">DNI</label>
                  <input type="text" className="form-control" id="crearEstudianteDto.persona.dni" placeholder="DNI del estudiante" value={formValues.crearEstudianteDto.persona.dni} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="crearEstudianteDto.persona.fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                  <input type="date" className="form-control" id="crearEstudianteDto.persona.fechaNacimiento" value={formValues.crearEstudianteDto.persona.fechaNacimiento} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="crearEstudianteDto.persona.numeroCelular" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="crearEstudianteDto.persona.numeroCelular" placeholder="Teléfono del estudiante" value={formValues.crearEstudianteDto.persona.numeroCelular} onChange={handleInputChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="crearEstudianteDto.sexo" className="form-label">Sexo</label>
                  <select className="form-select" id="crearEstudianteDto.sexo" value={formValues.crearEstudianteDto.sexo} onChange={handleInputChange}>
                    <option value="">Selecciona un sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="crearEstudianteDto.edad" className="form-label">Edad</label>
                  <input type="number" className="form-control" id="crearEstudianteDto.edad" placeholder="Edad del estudiante" value={formValues.crearEstudianteDto.edad} onChange={handleInputChange} />
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
                <label htmlFor="apoderadoDto.nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="apoderadoDto.nombre" placeholder="Nombre del apoderado" value={formValues.apoderadoDto.nombre} onChange={handleInputChange} />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="apoderadoDto.apellidoPaterno" className="form-label">Apellido Paterno</label>
                  <input type="text" className="form-control" id="apoderadoDto.apellidoPaterno" placeholder="Apellido paterno del apoderado" value={formValues.apoderadoDto.apellidoPaterno} onChange={handleInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="apoderadoDto.apellidoMaterno" className="form-label">Apellido Materno</label>
                  <input type="text" className="form-control" id="apoderadoDto.apellidoMaterno" placeholder="Apellido materno del apoderado" value={formValues.apoderadoDto.apellidoMaterno} onChange={handleInputChange} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="apoderadoDto.dni" className="form-label">DNI</label>
                  <input type="text" className="form-control" id="apoderadoDto.dni" placeholder="DNI del apoderado" value={formValues.apoderadoDto.dni} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="apoderadoDto.fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                  <input type="date" className="form-control" id="apoderadoDto.fechaNacimiento" value={formValues.apoderadoDto.fechaNacimiento} onChange={handleInputChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="apoderadoDto.numeroCelular" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="apoderadoDto.numeroCelular" placeholder="Teléfono del apoderado" value={formValues.apoderadoDto.numeroCelular} onChange={handleInputChange} />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="documentoCrearDto.urlConstancia" className="form-label">Adjuntar Constancia</label>
                <input type="file" className="form-control" id="documentoCrearDto.urlConstancia" onChange={handleFileChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="documentoCrearDto.urlLibreta" className="form-label">Adjuntar Boleta de Notas</label>
                <input type="file" className="form-control" id="documentoCrearDto.urlLibreta" onChange={handleFileChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="documentoCrearDto.urlCopiaDni" className="form-label">Adjuntar Copia de DNI</label>
                <input type="file" className="form-control" id="documentoCrearDto.urlCopiaDni" onChange={handleFileChange} />
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
