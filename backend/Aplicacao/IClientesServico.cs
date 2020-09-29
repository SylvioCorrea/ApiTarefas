using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Aplicacao.Modelos;
using Dominio;

namespace Aplicacao
{
    public interface IClientesServico
    {
        Task<ClienteModel> GetCliente(int id);
        Task<IEnumerable<ClienteModel>> GetClientes();
        Task<int> CreateCliente(ClienteModel cliente);
        Task<int> DeleteCliente(int id);
    }
}
