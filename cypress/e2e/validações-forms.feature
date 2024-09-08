#utf-8
#language: pt

Funcionalidade: Validações das quantidades de inputs obrigatorios nos formulários 
    Cenário: Validação do numero de inputs do formulário Veiculo 
        Dado que o usuário está na página home do portal Tricentis
        Quando o usuário clica na seção automobile 
        Então o usuário valida a quantidade de inputs obrigatórios na seção veiculo

    Cenário: Validação da quantidade de inputs do formulário Segurador
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário clica na seção segurador
        Entao o usuário valida a quantidade de inputs obrigatórios na seção segurador

    Cenário: Validação da quantidade de inputs do formulário Produto
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário clica na seção produto
        Entao o usuário valido a quantidade de inputs obrigatórios na seção produto
        
    Cenário: Validação da quantidade de inputs do formulário Selecionar Preço
        Dado que o usuário está na página home do portal Tricentis
        E o usuário clica na seção automobile 
        Quando o usuário clica na seção selecionar preco
        Entao o usuário valida a quantidade de inputs obrigatórios na seção selecionar preço
    