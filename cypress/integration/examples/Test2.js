/// <reference types="Cypress" />

describe('', function () {
    it('', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1')
            .check()
            .should('be.checked')
            .and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        cy.get('select').select('option3').should('have.value', 'option3');

        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click();
            }
        });

        cy.get('#autocomplete').should('have.value', 'India');
    });
});
