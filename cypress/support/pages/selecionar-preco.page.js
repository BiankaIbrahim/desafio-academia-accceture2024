const SELECT_PRECO = '#selectgold'
const BTN_PROXIMO_FORM_4 = '#nextsendquote'

Cypress.Commands.add('selecionarPreco', () => {
    cy.get(SELECT_PRECO).click({force:true})
    cy.get(BTN_PROXIMO_FORM_4).click()
})
