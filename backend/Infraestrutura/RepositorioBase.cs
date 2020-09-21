using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Data.SqlClient;

namespace Infraestrutura
{
    public class RepositorioBase
    {
        IConfiguration _configuration;

        public RepositorioBase(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public SqlConnection GetConnection()
        {
            return new SqlConnection(_configuration.GetSection("SqlConnectionString").Value);
        }
    }
}
