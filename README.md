# Api Tarefas
Web api conectada a um banco de dados SQL Server. Disponibiliza busca e armazenamento de informações para clientes e suas respectivas tarefas.

Endpoint swagger UI: \<host\>/swagger

Atende às seguintes requisições:
 - /clientes: GET - retorna os clientes cadastrados.
 - /clientes: POST - cadastra um cliente com a informação `nome` contida no corpo da requisição.
 - /clientes/\<id\>: GET - retorna o cliente cadastrado com a id.
 - /clientes/\<id\>/tarefas: GET - retorna id e nome do cliente junto com uma lista de todas as tarefas cadastradas para o mesmo.
 - /clientes/\<id\>/tarefas: POST - cadastra uma tarefa com a informação `descricao` contida no corpo da requisição.
 - /clientes/relatorio: GET - retorna a lista de todos os clientes com suas respectivas tarefas.