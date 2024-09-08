import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário está na página home do portal Tricentis', () => {
    cy.visit('/index.php')
})

And('o usuário clica na seção automobile', () => {
   cy.acessarSecaoAutomobile()
   cy.validarSecaoAutomolbile()
})

When('o usuário preenche o formulário do veículo com dados válidos e clica no botão Next', () => {
    cy.preencherCamposObrigatoriosVeiculo()
    cy.validarQtdCamposObrigatoriosSegurador()
})

And('o usuário preenche o formulário do segurador com dados válidos e clica no botão Next', () => {
    cy.preencherCamposObrigatoriosSegurador()
    cy.validarQtdCamposObrigatoriosProduto()
})

And('o usuário preenche o formulário do produto com dados válidos e clica no botão Next', () => {
    cy.preencherCamposObrigatoriosProduto()
    cy.validarQtdCamposObrigatoriosPreco()
})

Then('o usuário seleciona a opção de preço', () => {
    cy.validarCamposPreenchidosTodosForms()
    cy.selecionarPreco()
})





