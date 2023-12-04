# N3_Camargo
 
Pensando na versatilidade do sistema, acrescentei rotas extras para buscar componentes por categoria ou equipamento, tornando a busca mais específica.

A parte de autenticação foi importante, por isso criei um endpoint /login que espera receber um pedido contendo o campo username no corpo da requisição. Quando alguém faz login, utilizo uma função chamada generateAccessToken para gerar um token JWT. Esse token é enviado de volta como resposta para o cliente, permitindo o acesso às funcionalidades protegidas.

Para reforçar a segurança, implementei um middleware chamado authenticateToken. Ele verifica se um token JWT válido está presente no cabeçalho de autorização das requisições. Isso garante que apenas usuários autorizados possam acessar determinadas rotas do sistema.
