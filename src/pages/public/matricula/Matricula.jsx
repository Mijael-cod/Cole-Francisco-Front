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
              <h2>Datos del Apoderado</h2>
              <div className="mb-3">
                <label htmlFor="nombreApoderado" className="form-label">Nombre Apoderado</label>
                <input type="text" className="form-control" id="nombreApoderado" placeholder="Nombre del apoderado" />
              </div>
              <div className="mb-3">
                <label htmlFor="apellidoApoderado" className="form-label">Apellido Paterno</label>
                <input type="text" className="form-control" id="apellidoApoderado" placeholder="Apellido del apoderado" />
              </div>
              <div className="mb-3">
                <label htmlFor="apellidoApoderado" className="form-label">Apellido Materno</label>
                <input type="text" className="form-control" id="apellidoApoderado" placeholder="Apellido del apoderado" />
              </div>
              <div className="mb-3">
                <label htmlFor="emailApoderado" className="form-label">DNI</label>
                <input type="email" className="form-control" id="emailApoderado" placeholder="Email del apoderado" />
              </div>
              <div className="mb-3">
                <label htmlFor="telefonoApoderado" className="form-label">Teléfono</label>
                <input type="tel" className="form-control" id="telefonoApoderado" placeholder="Celular del apoderado" />
              </div>
            </div>
            <div className="col-md-6">
              <h2>Datos del Estudiante</h2>
              <div className="mb-3">
                <label htmlFor="nombreEstudiante" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombreEstudiante" placeholder="Nombre del estudiante" />
              </div>
              <div className="mb-3">
                <label htmlFor="nombreEstudiante" className="form-label">Apellido Paterno</label>
                <input type="text" className="form-control" id="nombreEstudiante" placeholder="Nombre del estudiante" />
              </div>
              <div className="mb-3">
                <label htmlFor="nombreEstudiante" className="form-label">Apellido Materno</label>
                <input type="text" className="form-control" id="nombreEstudiante" placeholder="Nombre del estudiante" />
              </div>
              <div className="mb-3">
                <label htmlFor="apellidoEstudiante" className="form-label">Sexo</label>
                <input type="text" className="form-control" id="apellidoEstudiante" placeholder="Apellido del estudiante" />
              </div>
              <div className="mb-3">
                <label htmlFor="curso" className="form-label">Curso</label>
                <select className="form-select" id="curso">
                  <option value="">Selecciona un curso</option>
                  <option value="curso1">Curso 1</option>
                  <option value="curso2">Curso 2</option>
                  <option value="curso3">Curso 3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 mt-5">
            <button class="btn btn-primary" type="button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
