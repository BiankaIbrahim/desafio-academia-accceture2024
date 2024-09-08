const BTN_ACESSAR_AUTOMOVEL = '#nav_automobile'
const SECAO_SELECT_INSURE = '#selectedinsurance'

Cypress.Commands.add('acessarSecaoAutomobile', () => {
    cy.get(BTN_ACESSAR_AUTOMOVEL).click()
})

Cypress.Commands.add('validarSecaoAutomolbile', () => {
    cy.get(SECAO_SELECT_INSURE).should('be.visible')
})
