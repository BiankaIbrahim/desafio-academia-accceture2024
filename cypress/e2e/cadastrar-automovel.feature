#utf-8
#language: pt

Funcionalidade: Preenchimento dos formulários da seção automóvel - Automobile Insurance
    Cenário: Preenchimento dos formulários bem-sucedidos com os campos obrigatórios preenchidos
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário preenche o formulário do veículo com dados válidos e clica no botão Next
        E o usuário preenche o formulário do segurador com dados válidos e clica no botão Next
        E o usuário preenche o formulário do produto com dados válidos e clica no botão Next
        Então o usuário seleciona a opção de preço
        
    Cenário: Preenchimento dos formulários com o campo data de fabricação vazio
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário deixa o campo data de fabricação vazio e clica no botão Next
        E o usuário preenche o formulário do segurador com dados válidos e clica no botão Next
        E o usuário preenche o formulário do produto com dados válidos e clica no botão Next
        Então o sistema irá exibir uma mensagem de erro indicando que é necessário completar os passos anteriores

    Cenário: Inserir dada inválida no campo data de fabricação 
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário preenche o campo data de fabricação com uma data inválida
        Então o sistema irá exibir uma mensagem de erro indicando que deve inserir uma data válida

    Cenário: Inserir valor menor que o intervalo permitido no campo desempenho do motor 
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário preenche o campo desempenho do motor menor que o intervalo permitido
        Então o sistema irá exibir uma mensagem de erro indicando que é necessário inserir um valor dentro do intervalo

    Cenário: Inserir valor maior que o intervalo permitido no campo desempenho do motor 
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário preenche o campo desempenho do motor maior que o intervalo permitido
        Então o sistema irá exibir uma mensagem de erro indicando que é necessário inserir um valor dentro do intervalo 

    Cenário: Validar mensagem de campo obrigatório da seção veiculo ao clicar no campo Fabricante
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário clica no campo fabricante da seção veiculo
        Então o sistema irá exibir uma mensagem que o campo é obrigatório

    Cenário: Validar mensagem de erro do campo nome com numeros da seção segurador
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        E o usuário preenche o formulário do veículo com dados válidos e clica no botão Next
        Quando o usuário preenche o campo nome com numeros
        Então o sistema irá exibir uma mensagem de erro indicando que o campo nome só pode conter letras

    Cenário: Validar mensagem de erro do campo nome com 1 caracter da seção segurador
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        E o usuário preenche o formulário do veículo com dados válidos e clica no botão Next
        Quando o usuário preenche o campo nome com 1 caracter
        Então o sistema irá exibir uma mensagem de erro indicando que o campo nome só pode conter letras

    Cenário: Validar mensagem de erro do campo sobrenome com numeros da seção segurador
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        E o usuário preenche o formulário do veículo com dados válidos e clica no botão Next
        Quando o usuário preenche o campo sobrenome com numeros
        Então o sistema irá exibir uma mensagem de erro indicando que o campo sobrenome só pode conter letras

    Cenário: Validar mensagem de erro do campo sobrenome com 1 caracter da seção segurador
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        E o usuário preenche o formulário do veículo com dados válidos e clica no botão Next
        Quando o usuário preenche o campo sobrenome com 1 caracter
        Então o sistema irá exibir uma mensagem de erro indicando que o campo sobrenome só pode conter letras

    

