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
        cy.get('nav').contains('Iniciar Sesión');
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

    it("should fill out and submit the login form", () => {
        cy.visit(Public.authLogin);

        cy.get('#email').type('usuario@example.com');
        cy.get('#password').type('contraseña');

        cy.get('#loginButton').click();

        cy.url().should('include', '/private/admin/dashboard');
    }); 

    // it("should search on Google and return to the app", () => {
    //     cy.origin('https://www.google.com', () => {
    //         cy.visit('/');
    //         cy.on('uncaught:exception', (err) => {
    //             if (err.message.includes('Failed to read a named property')) {
    //                 return false;
    //             }
    //             return true;
    //         });
    //         cy.get('body').then(($body) => {
    //             if ($body.find('button:contains("Acepto")').length) {
    //                 cy.get('button').contains('Acepto').click();
    //             }
    //         });
    //         cy.get('input[name="q"]').type('Ejemplos de test{enter}');
    //         cy.get('#search').should('contain', 'Ejemplos de test');
    //     });
    //     cy.visit('/');
    //     cy.url().should('eq', Cypress.config().baseUrl + '/');
    // });

    

});
