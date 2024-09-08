When('o usuário preenche o campo desempenho do motor menor que o intervalo permitido', () => {
    cy.campoDesempenhoMotorMenorQueIntevaloPermitido()
 })
 
When('o usuário preenche o campo desempenho do motor maior que o intervalo permitido', () => {
     cy.campoDesempenhoMotorMaiorQueIntevaloPermitido()
  })
 
Then('o sistema irá exibir uma mensagem de erro indicando que é necessário inserir um valor dentro do intervalo', () => {
     cy.validarErroDesempenhoMotorForaDoIntevalo()
 })