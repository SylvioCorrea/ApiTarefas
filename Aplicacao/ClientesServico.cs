using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Threading.Tasks;

using Aplicacao.Modelos;
using Dominio;
using Infraestrutura;

namespace Aplicacao
{
    public class ClientesServico : IClientesServico
    {
        private IClientesRepositorio _clientesRepositorio;
        private ITarefasRepositorio _tarefasRepositorio;

        public ClientesServico(IClientesRepositorio clientesRepositorio, ITarefasRepositorio tarefasRepositorio)
        {
            _clientesRepositorio = clientesRepositorio;
            _tarefasRepositorio = tarefasRepositorio;
        }
        public async Task<IEnumerable<ClienteModel>> GetClientes()
        {
            IEnumerable<Cliente> clientes = await _clientesRepositorio.SelectClientes();
            return clientes.Select(c => new ClienteModel { Id = c.Id, Nome = c.Nome });
        }

        public async Task<ClienteModel> GetCliente(int id)
        {
            Cliente cliente = await _clientesRepositorio.SelectCliente(id);
            return new ClienteModel { Id = cliente.Id, Nome = cliente.Nome };
        }

        public async Task<int> CreateCliente(ClienteModel cliente)
        {
            return await _clientesRepositorio.InsertCliente(new Cliente { Id = cliente.Id, Nome = cliente.Nome });
        }
    }
}
