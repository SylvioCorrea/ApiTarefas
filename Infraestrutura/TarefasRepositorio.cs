using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Linq;
using Dominio;
using Dapper;

namespace Infraestrutura
{
    public class TarefasRepositorio : RepositorioBase, ITarefasRepositorio
    {
        public TarefasRepositorio(IConfiguration configuration) : base(configuration)
        {

        }

        public async Task<IEnumerable<Tarefa>> SelectTarefas(int idCliente)
        {
            using (SqlConnection con = GetConnection())
            {
                string sql = "select * from tarefas where id_cliente = @idCliente;";
                return await con.QueryAsync<Tarefa>(sql, new {idCliente});
            }
        }

        public async Task<int> InsertTarefa(Tarefa tarefa)
        {
            using (SqlConnection con = GetConnection())
            {
                string sql = "insert into tarefas (id_cliente, descricao) values (@Id_Cliente, @Descricao);";
                return await con.ExecuteAsync(sql, tarefa);
            }
        }

        public async Task<ClienteTarefas> SelectClienteTarefas(int idCliente)
        {
            using (SqlConnection con = GetConnection())
            {
                string sql =
                    @"select c.id, c.nome, t.id, t.id_cliente, t.descricao
                    from clientes c left join tarefas t on c.id = t.id_cliente
                    where c.id = @idCliente;";

                Cliente cliente = null;
                IEnumerable<Tarefa> tarefas = await con.QueryAsync<Cliente, Tarefa, Tarefa>(
                    sql,
                    (c, t) =>
                    {
                        if (cliente == null) cliente = c;
                        return t;
                    },
                    new {idCliente}
                );
                return new ClienteTarefas
                {
                    Cliente = cliente,
                    /*Se um objeto tarefa foi inicializado com id 0 é porque o
                     retorno do banco foi nulo (Não há tarefa com id 0 no banco)*/
                    Tarefas = tarefas.Where(t => t != null).ToList()
                };
            }
        }

        
    }
}
