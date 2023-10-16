Feature: Verificar anuncio existente
	Como Anunciante ou Cliente
	Quero pesquisar no Publicazo
	Para encontrar um servico

Scenario: Pesquisar um anuncio de servico
    Given que o usuario esteja pagina principal
    When o usuario pesquisa um servico
    Then sao exibidos os servicos cadastrados na plataforma