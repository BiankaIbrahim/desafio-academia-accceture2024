const BTN_SECAO_SEGURADOR = '#enterinsurantdata'
const BTN_SECAO_PRODUTO = '#enterproductdata'
const BTN_SECAO_PRECO = '#selectpriceoption'
const QUANTIDADE_CAMPOS_SECAO_VEICULO = '#entervehicledata .counter'
const QUANTIDADE_CAMPOS_SECAO_SEGURADOR = '#enterinsurantdata .counter'
const QUANTIDADE_CAMPOS_SECAO_PRODUTO = '#enterproductdata .counter'
const QUANTIDADE_CAMPOS_SECAO_PRECO = '#selectpriceoption .counter'


Cypress.Commands.add('clicarSecaoSegurador', () => {
    cy.get(BTN_SECAO_SEGURADOR).click()    
})

Cypress.Commands.add('clicarSecaoProduto', () => {
    cy.get(BTN_SECAO_PRODUTO).click()    
})

Cypress.Commands.add('clicarSecaoPreco', () => {
    cy.get(BTN_SECAO_PRECO).click()    
})

Cypress.Commands.add('validarCamposPreenchidosTodosForms', () => {
    // se a quantidades de inputs obrigatorios dos forms for 0 -> sucesso
    cy.get(QUANTIDADE_CAMPOS_SECAO_VEICULO).should('contain.text', '0') 
    cy.get(QUANTIDADE_CAMPOS_SECAO_SEGURADOR).should('contain.text', '0')
    cy.get(QUANTIDADE_CAMPOS_SECAO_PRODUTO).should('contain.text', '0')  
})

Cypress.Commands.add('validarQtdCamposObrigatoriosVeiculo', () => {
    cy.get(QUANTIDADE_CAMPOS_SECAO_VEICULO).should('be.visible').and('contain.text', '7')
    
})

Cypress.Commands.add('validarQtdCamposObrigatoriosSegurador', () => {
    cy.get(QUANTIDADE_CAMPOS_SECAO_SEGURADOR).should('be.visible').and('contain.text', '7')
    
})

Cypress.Commands.add('validarQtdCamposObrigatoriosProduto', () => {
    cy.get(QUANTIDADE_CAMPOS_SECAO_PRODUTO).should('be.visible').and('contain.text', '6')
    
})

Cypress.Commands.add('validarQtdCamposObrigatoriosPreco', () => {
    cy.get(QUANTIDADE_CAMPOS_SECAO_PRECO).should('be.visible').and('contain.text', '1')
    
})
