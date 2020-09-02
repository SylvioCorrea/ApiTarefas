using System;
using System.Collections.Generic;

using System.Threading.Tasks;

using Infraestrutura;
using Aplicacao.Modelos;
using Dominio;
using System.Linq;

namespace Aplicacao
{
    public class TarefasServico : ITarefasServico
    {
        private IClientesRepositorio _clientesRepositorio;
        private ITarefasRepositorio _tarefasRepositorio;

        public TarefasServico(IClientesRepositorio clientesRepositorio, ITarefasRepositorio tarefasRepositorio)
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

        public async Task<ClienteTarefasModel> GetTarefas(int idCliente)
        {
            Cliente cliente = await _clientesRepositorio.SelectCliente(idCliente);
            IEnumerable<Tarefa> tarefas = await _tarefasRepositorio.SelectTarefas(idCliente);
            return new ClienteTarefasModel
            {
                Id = cliente.Id,
                Nome = cliente.Nome,
                Tarefas = tarefas
            };
        }

        public async Task<int> CreateCliente(ClienteModel cliente)
        {
            return await _clientesRepositorio.InsertCliente(new Cliente { Id = cliente.Id, Nome = cliente.Nome });
        }

        public async Task<int> CreateTarefa(TarefaModel tarefa)
        {
            return await _tarefasRepositorio.InsertTarefa(new Tarefa {Id=tarefa.Id, Id_Cliente=tarefa.IdCliente, Descricao=tarefa.Descricao});
        }
    }
}
