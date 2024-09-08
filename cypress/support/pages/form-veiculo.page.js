const SELECT_FABRICANTE = '#make'
const INPUT_DESEMPENHO_MOTOR = '#engineperformance'
const INPUT_DATA_FABRICACAO = '#dateofmanufacture'
const SELECT_NUMERO_ASSENTOS = '#numberofseats'
const SELECT_TIPO_COMBUSTIVEL = '#fuel'
const INPUT_LISTA_PRECO = '#listprice'
const INPUT_QUILOMETRAGEM_ANUAL = '#annualmileage'
const BTN_PROXIMO_FORM_1 = '#nextenterinsurantdata'
const MENSAGEM_ERRO_CAMPO_VAZIO = '#xLoaderPrice p'
const QUANTIDADE_CAMPOS_SECAO_VEICULO = '#entervehicledata .counter'

Cypress.Commands.add('preencherCamposObrigatoriosVeiculo', () => {
    cy.get(SELECT_FABRICANTE).select('Honda')
    cy.get(INPUT_DESEMPENHO_MOTOR).type('2000')
    cy.get(INPUT_DATA_FABRICACAO).type('09/30/2023')
    cy.get(SELECT_NUMERO_ASSENTOS).select('4')
    cy.get(SELECT_TIPO_COMBUSTIVEL).select('Diesel')
    cy.get(INPUT_LISTA_PRECO).type('500')
    cy.get(INPUT_QUILOMETRAGEM_ANUAL).type('100')
    cy.get(BTN_PROXIMO_FORM_1).click()
})

Cypress.Commands.add('campoDataFabricacaoVazio', () => {
    cy.get(SELECT_FABRICANTE).select('Honda')
    cy.get(INPUT_DESEMPENHO_MOTOR).type('2000')
    cy.get(SELECT_NUMERO_ASSENTOS).select('4')
    cy.get(SELECT_TIPO_COMBUSTIVEL).select('Diesel')
    cy.get(INPUT_LISTA_PRECO).type('500')
    cy.get(INPUT_QUILOMETRAGEM_ANUAL).type('100')
    cy.get(BTN_PROXIMO_FORM_1).click()
})

Cypress.Commands.add('validarQtdInputsVeiculoIgual1', () => {
    cy.get(QUANTIDADE_CAMPOS_SECAO_VEICULO).should('contain.text', '1') 
})

Cypress.Commands.add('campoDataFabricacaoInvalida', () => {
    cy.get(SELECT_FABRICANTE).select('Honda')
    cy.get(INPUT_DESEMPENHO_MOTOR).type('1')
    cy.get(INPUT_DATA_FABRICACAO).type('30/09/2023')
})

Cypress.Commands.add('campoDesempenhoMotorMenorQueIntevaloPermitido', () => {
    cy.get(SELECT_FABRICANTE).select('Honda')
    cy.get(INPUT_DESEMPENHO_MOTOR).type('0')
})

Cypress.Commands.add('campoDesempenhoMotorMaiorQueIntevaloPermitido', () => {
    cy.get(SELECT_FABRICANTE).select('Honda')
    cy.get(INPUT_DESEMPENHO_MOTOR).type('2001')
})

Cypress.Commands.add('validarErroCampoDataFabricacaoVazio', () => {
    cy.get(MENSAGEM_ERRO_CAMPO_VAZIO)
    .should('be.visible')
    .should('contain.text', 'Please, complete the first three steps to see the price table.')
})

Cypress.Commands.add('validarErroDesempenhoMotorForaDoIntevalo', () => {
    cy.get(INPUT_DESEMPENHO_MOTOR).next('.error')
    .should('be.visible')
    .and('have.text', 'Must be a number between 1 and 2000')
})

Cypress.Commands.add('validarErroDataFabricacaoInvalida', () => {
    cy.get('span.error', { force: true }) 
        .should('be.visible')
        .and('contain.text', 'Must be a valid date');
})

Cypress.Commands.add('selecionandoCampoDesempenhoMotorSemPreencher', () => {
    cy.get(SELECT_FABRICANTE).select('Nissan')
    cy.get(INPUT_DESEMPENHO_MOTOR).click()
})

Cypress.Commands.add('validarMensagemCampoFabrincanteObrigatorio', () => {
    cy.get(INPUT_DESEMPENHO_MOTOR)  
    .next('span.error')         
    .should('be.visible')       
    .and('contain.text', 'This field is mandatory')
})







