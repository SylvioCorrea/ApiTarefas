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
    }
}
