import { Public } from "../../src/routes/public/auth";

describe("App", () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it("should render the App component with React Router DOM routes", () => {
        cy.visit(Public.home);
        cy.get('nav').contains('Inicio');
        cy.get('nav').contains('Nosotros');
        cy.get('nav').contains('Galeria');
        cy.get('nav').contains('Matricula');
        cy.get('nav').contains('Iniciar Sesión');
    });

    it("should navigate to the Matricula page when clicking on the corresponding link", () => {
        cy.get('nav').contains('Matricula').click();
        cy.url().should('include', Public.matricula);
    });

    it("should fill out and submit the enrollment form", () => {
        cy.visit(Public.matricula);
    
        // Datos del Alumno
        cy.get('#crearEstudianteDto\\.persona\\.nombre').type('Gerson');
        cy.get('#crearEstudianteDto\\.persona\\.apellidoPaterno').type('Bravo');
        cy.get('#crearEstudianteDto\\.persona\\.apellidoMaterno').type('Herrera');
        cy.get('#crearEstudianteDto\\.persona\\.dni').type('76965732');
        cy.get('#crearEstudianteDto\\.persona\\.fechaNacimiento').type('2000-01-01');
        cy.get('#crearEstudianteDto\\.persona\\.numeroCelular').type('987654321');
        cy.get('#crearEstudianteDto\\.edad').type('18');
        cy.get('#crearEstudianteDto\\.sexo').select('Masculino');
        cy.get('#idGrado').select('1');
    
        // Contacto del Apoderado
        cy.get('#apoderadoDto\\.nombre').type('Carlos');
        cy.get('#apoderadoDto\\.apellidoPaterno').type('Pérez');
        cy.get('#apoderadoDto\\.apellidoMaterno').type('López');
        cy.get('#apoderadoDto\\.dni').type('87654321');
        cy.get('#apoderadoDto\\.fechaNacimiento').type('1980-01-01');
        cy.get('#apoderadoDto\\.numeroCelular').type('123456789');
    
        // cy.get('button').contains('Enviar').click();
    
        // cy.url().should('include', '/success');
    });
    

    it("should fill out and submit the login form", () => {
        cy.visit(Public.authLogin);

        cy.get('#email').type('usuario@example.com');
        cy.get('#password').type('contraseña');

        cy.get('#loginButton').click();

        cy.url().should('include', '/private/admin/dashboard');
    }); 
    

});
