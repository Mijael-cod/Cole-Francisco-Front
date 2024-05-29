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
        cy.get('nav').contains('Admisión');
    });

    it("should navigate to the Admisión page when clicking on the corresponding link", () => {
        cy.get('nav').contains('Admisión').click();
        cy.url().should('include', Public.matricula);
    });

    it("should fill out and submit the enrollment form", () => {
        cy.visit(Public.matricula);
    
        cy.get('#nombreEstudiante').type('Juan');
        cy.get('#apellidoPaternoEstudiante').type('Pérez');
    
        cy.get('#sexoEstudiante').select('Masculino');
        cy.get('#curso').select('Curso 1');
    
        cy.get('button').contains('Enviar').click();
    
    });
    

    

});
