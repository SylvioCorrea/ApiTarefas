using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Dominio;


namespace Infraestrutura
{
    public interface IClientesRepositorio
    {
        Task<IEnumerable<Cliente>> SelectClientes();
        Task<Cliente> SelectCliente(int id);
        Task<int> InsertCliente(Cliente cliente);
    }
}
