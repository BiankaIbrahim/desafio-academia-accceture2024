import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
              
Then('o usuário valida a quantidade de inputs obrigatórios na seção veiculo', () => {
    cy.validarQtdCamposObrigatoriosVeiculo()
})

When('o usuário clica na seção segurador', () => {
    cy.clicarSecaoSegurador()
})

Then('o usuário valida a quantidade de inputs obrigatórios na seção segurador', () => {
    cy.validarQtdCamposObrigatoriosSegurador()    
})

When('o usuário clica na seção produto', () => {
    cy.clicarSecaoProduto()
})

Then('o usuário valido a quantidade de inputs obrigatórios na seção produto', () => {
    cy.validarQtdCamposObrigatoriosProduto()
})

When('o usuário clica na seção selecionar preco', () => {
    cy.clicarSecaoPreco()
})

Then('o usuário valida a quantidade de inputs obrigatórios na seção selecionar preço', () => {
    cy.validarQtdCamposObrigatoriosPreco()
})


    
