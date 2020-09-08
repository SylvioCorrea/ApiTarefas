# Api Tarefas
Web api conectada a um banco de dados SQL Server. Disponibiliza busca e armazenamento de informações para clientes e suas respectivas tarefas.

Endpoint swagger UI: \<host\>/swagger

Atende às seguintes requisições:
 - /clientes: GET - retorna os clientes cadastrados.
 - /clientes: POST - cadastra um cliente com a informação `nome` contida no corpo da requisição.
 - /clientes/\<id\>: GET - retorna o cliente cadastrado com a id.
 - /clientes/\<id\>/tarefas: GET - retorna lista de todas as tarefas cadastradas para o cliente.
 - /clientes/\<id\>/tarefas: POST - cadastra uma tarefa com a informação `descricao` contida no corpo da requisição.
 - /clientes/relatorio: GET - retorna a lista de todos os clientes com suas respectivas tarefas.
 - /clientes/tarefas?busca=\<busca\>&maiorQue=\<mm-dd-aaaa\>: GET - retorna a lista de todas as tarefas. Disponibiliza a opção de buscar as tarefas que contenham determinada string `busca` na descrição e/ou foram criadas após uma data `maiorQue`. A data pode ser separada por `-` ou `/`, no formato mm/dd/aaaa.