import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('o usuário deixa o campo data de fabricação vazio e clica no botão Next', () => {
    cy.campoDataFabricacaoVazio()
})

Then('o sistema irá exibir uma mensagem de erro indicando que é necessário completar os passos anteriores', () => {
    cy.validarErroCampoDataFabricacaoVazio()
    cy.validarQtdInputsVeiculoIgual1()
})    

When('o usuário preenche o campo data de fabricação com uma data inválida', () => {
    cy.campoDataFabricacaoInvalida() 
})

Then('o sistema irá exibir uma mensagem de erro indicando que deve inserir uma data válida', () => {
    cy.validarErroDataFabricacaoInvalida()
})

When('o usuário clica no campo fabricante da seção veiculo', () => {
    cy.selecionandoCampoDesempenhoMotorSemPreencher()
})

Then('o sistema irá exibir uma mensagem que o campo é obrigatório', () => {
    cy.validarMensagemCampoFabrincanteObrigatorio()
})

When('o usuário preenche o campo nome com numeros', () => {
    cy.preencherCampoNomeComNumeroSegurador()
})

When('o usuário preenche o campo nome com 1 caracter', () => {
    cy.preencherCampoNomeComUmCaracterSegurador()
})

Then('o sistema irá exibir uma mensagem de erro indicando que o campo nome só pode conter letras', () => {
    cy.validarMensagemErroCampoNomeSegurador()
})

When('o usuário preenche o campo sobrenome com numeros', () => {
    cy.preencherCampoSobrenomeComNumeroSegurador()
})

When('o usuário preenche o campo sobrenome com 1 caracter', () => {
    cy.preencherCamposSobrenomeComUmCaracterSegurador()
})

Then('o sistema irá exibir uma mensagem de erro indicando que o campo sobrenome só pode conter letras', () => {
    cy.validarMensagemErroCampoSobrenomeSegurador()
})







        





