import Navbar from "../../../shared/navbar/public/Navbar";

export default function Matricula() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-5">
        {/* <h1>Formulario de Matrícula</h1> */}
        <form>
          <div className="row">
            <div className="col-md-6">
              <h2>Datos del Alumno</h2>
              <div className="mb-3">
                <label htmlFor="nombreEstudiante" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombreEstudiante" placeholder="Nombre del estudiante" />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellidoPaternoEstudiante" className="form-label">Apellido Paterno</label>
                  <input type="text" className="form-control" id="apellidoPaternoEstudiante" placeholder="Apellido paterno del estudiante" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellidoMaternoEstudiante" className="form-label">Apellido Materno</label>
                  <input type="text" className="form-control" id="apellidoMaternoEstudiante" placeholder="Apellido materno del estudiante" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="dniEstudiante" className="form-label">DNI</label>
                  <input type="text" className="form-control" id="dniEstudiante" placeholder="DNI del estudiante" />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="fechaNacimientoEstudiante" className="form-label">Fecha de Nacimiento</label>
                  <input type="date" className="form-control" id="fechaNacimientoEstudiante" />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="telefonoEstudiante" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="telefonoEstudiante" placeholder="Teléfono del estudiante" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="sexoEstudiante" className="form-label">Sexo</label>
                  <select className="form-select" id="sexoEstudiante">
                    <option value="">Selecciona un sexo</option>
                    <option value="sexoEstudiante1">Masculino</option>
                    <option value="sexoEstudiante2">Femenino</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="edadEstudiante" className="form-label">Edad</label>
                  <input type="number" className="form-control" id="edadEstudiante" placeholder="Edad del estudiante" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="curso" className="form-label">Grado</label>
                <select className="form-select" id="curso">
                  <option value="">Selecciona un grado</option>
                  <option value="curso1">Primer Grado</option>
                  <option value="curso2">Segundo Grado</option>
                  <option value="curso3">Tercer Grado</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Contacto del Apoderado</h2>
              <div className="mb-3">
                <label htmlFor="numeroPadre" className="form-label">Número Celular del Apoderado</label>
                <input type="tel" className="form-control" id="numeroPadre" placeholder="Número del apoderado" />
              </div>
              <div className="mb-3">
                <label htmlFor="dniArchivo" className="form-label">Adjuntar DNI</label>
                <input type="file" className="form-control" id="dniArchivo" />
              </div>
              <div className="mb-3">
                <label htmlFor="boletaNotasArchivo" className="form-label">Adjuntar Boleta de Notas</label>
                <input type="file" className="form-control" id="boletaNotasArchivo" />
              </div>
              <div className="d-grid gap-2 mt-4">
                <button className="btn btn-primary" type="button">Enviar</button>
              </div>
            </div>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}
