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
    public class ClientesRepositorio : RepositorioBase, IClientesRepositorio
    {
        public ClientesRepositorio(IConfiguration configuration) : base(configuration)
        {

        }

        public async Task<IEnumerable<Cliente>> SelectClientes()
        {
            using(SqlConnection con = GetConnection())
            {
                string sql = "select * from clientes;";
                return await con.QueryAsync<Cliente>(sql);
            }
        }

        public async Task<Cliente> SelectCliente(int id)
        {
            using (SqlConnection con = GetConnection())
            {
                string sql = "select * from clientes where id = @id;";
                return await con.QueryFirstOrDefaultAsync<Cliente>(sql, new { id });
            }
        }

        public async Task<int> InsertCliente(Cliente cliente)
        {
            using (SqlConnection con = GetConnection())
            {
                string sql = "insert into clientes (nome) values (@Nome);";
                return await con.ExecuteAsync(sql, cliente);
            }
        }

        public async Task<int> DeleteCliente(int id)
        {
            using(SqlConnection con = GetConnection())
            {
                string sql = "delete from clientes where id = @id";
                return await con.ExecuteAsync(sql, new { id });
            }
        }
    }
}
