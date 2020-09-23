using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using Dapper;
using System.Threading.Tasks;
using System.Linq;

using Dominio;

namespace Infraestrutura
{
    public class RelatorioRepositorio : RepositorioBase, IRelatorioRepositorio
    {
        public RelatorioRepositorio(IConfiguration configuration) : base(configuration)
        {

        }

        public async Task<Relatorio> SelectRelatorio()
        {
            
            using (SqlConnection con = GetConnection())
            {
                string sql =
                    @"select c.id, c.nome, t.id, t.id_cliente, t.descricao, t.data_de_criacao
                    from clientes c left join tarefas t on c.id = t.id_cliente;";

                
                var dict = new Dictionary<int, ClienteTarefas>();
                await con.QueryAsync<Cliente, Tarefa, int>(
                    sql,
                    (c, t) =>
                    {
                        ClienteTarefas clienteTarefas;
                        if (!dict.TryGetValue(c.Id, out clienteTarefas))
                        {
                            clienteTarefas = new ClienteTarefas { Cliente = c, Tarefas = new List<Tarefa>()};
                            dict.Add(c.Id, clienteTarefas);
                        }
                        if(t != null) clienteTarefas.Tarefas.Add(t);
                        return 1;
                    }
                );

                return new Relatorio { ListaClientesTarefas = dict.Values };
            }
        }
    }
}
