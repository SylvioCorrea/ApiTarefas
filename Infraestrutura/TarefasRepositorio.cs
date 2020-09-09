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

        public async Task<IEnumerable<Tarefa>> SelectTarefas(string contem, DateTime? dataMaiorQue)
        {
            using (SqlConnection con = GetConnection())
            {
                string sql = "select * from tarefas;";
                var lista = await con.QueryAsync<Tarefa>(sql);
                if (contem != null) lista = lista.Where(t => t.Descricao.Contains(contem));
                if (dataMaiorQue != null) lista = lista.Where(t => t.Data_De_Criacao > dataMaiorQue);
                return lista;
            }
        }

        public async Task<int> InsertTarefa(Tarefa tarefa)
        {
            using (SqlConnection con = GetConnection())
            {
                //Insere a data definida pelo usuário na entrada se houver.
                //Senão o banco usa o próprio valor default getdate().
                string colunaData = "";
                string valorData = "";
                if(tarefa.Data_De_Criacao != null)
                {
                    colunaData = ", data_de_criacao";
                    valorData = ", @Data_De_Criacao";
                }
                string sql = $"insert into tarefas (id_cliente, descricao {colunaData}) values (@Id_Cliente, @Descricao {valorData});";
                return await con.ExecuteAsync(sql, tarefa);
            }
        }
    }
}
