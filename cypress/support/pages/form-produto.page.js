const INPUT_DATA_INICIO = '#startdate'
const SELECT_VALOR_SEGURO = '#insurancesum'
const SELECT_CLASSIFICACAO_MERITO = '#meritrating'
const SELECT_SEGURO_DANOS = '#damageinsurance'
const CHECKBOX_PRODUTOS_OPCIONAIS = 'input#EuroProtection'
const SELECT_CARRO_CORTESIA = '#courtesycar'
const BTN_PROXIMO_FORM_3 = '#nextselectpriceoption'

Cypress.Commands.add('preencherCamposObrigatoriosProduto', () => {
    cy.get(INPUT_DATA_INICIO).type('10/10/2024')
    cy.get(SELECT_VALOR_SEGURO).select('5000000')
    cy.get(SELECT_CLASSIFICACAO_MERITO).select('Bonus 1')
    cy.get(SELECT_SEGURO_DANOS).select('No Coverage')
    cy.get(CHECKBOX_PRODUTOS_OPCIONAIS).check({ force: true })
    cy.get(SELECT_CARRO_CORTESIA).select('No')
    cy.get(BTN_PROXIMO_FORM_3).click()
})


