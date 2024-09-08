const INPUT_NOME = '#firstname'
const INPUT_SOBRENOME = '#lastname'
const INPUT_DATA_NASCIMENTO = '#birthdate'
const SELECT_PAIS = '#country'
const INPUT_CEP = '#zipcode'
const SELECT_OCUPAÇÃO = '#occupation'
const CHECKBOX_PASSATEMPOS = '#bungeejumping'
const BTN_PROXIMO_FORM_2 = '#nextenterproductdata'


Cypress.Commands.add('preencherCamposObrigatoriosSegurador', () => {
    cy.get(INPUT_NOME).type(Cypress.env('nome'), {log: false})
    cy.get(INPUT_SOBRENOME).type(Cypress.env('sobrenome'), {log: false})
    cy.get(INPUT_DATA_NASCIMENTO).type(Cypress.env('data_nascimento'), {log: false})
    cy.get(SELECT_PAIS).select('China')
    cy.get(INPUT_CEP).type(Cypress.env('cep'), {log: false})
    cy.get(SELECT_OCUPAÇÃO).select('Selfemployed')
    cy.get(CHECKBOX_PASSATEMPOS).siblings('span.ideal-check').click()
    cy.get(BTN_PROXIMO_FORM_2).click()
})

Cypress.Commands.add('preencherCampoNomeComNumeroSegurador', () => {
    cy.get(INPUT_NOME).type('bi1')   
})

Cypress.Commands.add('preencherCampoNomeComUmCaracterSegurador', () => {
    cy.get(INPUT_NOME).type('b')   
})

Cypress.Commands.add('preencherCampoSobrenomeComNumeroSegurador', () => {
    cy.get(INPUT_NOME).type('bianka')
    cy.get(INPUT_SOBRENOME).type('m1')   
})

Cypress.Commands.add('preencherCamposSobrenomeComUmCaracterSegurador', () => {
    cy.get(INPUT_NOME).type('bianka')
    cy.get(INPUT_SOBRENOME).type('a')   
})

Cypress.Commands.add('validarMensagemErroCampoNomeSegurador', () => {
    cy.get(INPUT_NOME).next('span.error').should('be.visible')       
    .and('contain.text', 'Must be at least 2 characters long and must only contain letters')  
})

Cypress.Commands.add('validarMensagemErroCampoSobrenomeSegurador', () => {
    cy.get(INPUT_SOBRENOME).next('span.error').should('be.visible')       
    .and('contain.text', 'Must be at least 2 characters long and must only contain letters')  
})




