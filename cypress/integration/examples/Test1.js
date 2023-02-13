/// <reference types='Cypress' />

describe('login', function () {
    before(function () {
        cy.fixture('user-data').then(function (data) {
            this.data = data;
        });
    });
    it('login with correct credential', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name="name"]:nth-child(1)').type(this.data.name);
        cy.get('select').select(this.data.gender);
        cy.get(':nth-child(4) > .ng-valid').should(
            'have.value',
            this.data.name
        );
    });

    it.only('shop', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();

        this.data.productNames.forEach(function (productName) {
            // console.log(productName);
            cy.selectProduct(productName);
        });
    });
});
