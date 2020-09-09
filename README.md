# Api Tarefas
Web api conectada a um banco de dados SQL Server. Disponibiliza busca e armazenamento de informações para clientes e suas respectivas tarefas.

Endpoint swagger UI: \<host\>/swagger

Atende às seguintes requisições:
 - /clientes: GET - retorna os clientes cadastrados.
 - /clientes: POST - cadastra um cliente com a informação `nome` contida no corpo da requisição.
 - /clientes/\<id\>: GET - retorna o cliente cadastrado com a id.
 - /clientes/\<id\>/tarefas: GET - retorna lista de todas as tarefas cadastradas para o cliente.
 - /clientes/\<id\>/tarefas: POST - cadastra uma tarefa com as informações `descricao` e `data_de_criacao` contidas no corpo da requisição. A data é opcional, podendo ser nula.
 - /clientes/relatorio: GET - retorna a lista de todos os clientes com suas respectivas tarefas.
 - /clientes/tarefas?contem=\<contem\>&dataMaiorQue=\<mm-dd-aaaa\>: GET - retorna a lista de todas as tarefas. Disponibiliza a opção de buscar as tarefas que contenham determinada string `contem` na descrição e/ou foram criadas após uma data `dataMaiorQue`. A data pode ser separada por `-` ou `/`, no formato mm/dd/aaaa. (uma adição foi feita no script sql para que a tabela de tarefas passe a conter um campo data_de_criacao com valor default sendo a data atual)