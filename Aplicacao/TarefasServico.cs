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
        
        public async Task<ClienteTarefasModel> GetTarefas(int idCliente)
        {
            ClienteTarefas ct = await _tarefasRepositorio.SelectClienteTarefas(idCliente);
            return new ClienteTarefasModel
            {
                Id = ct.Id,
                Nome = ct.Nome,
                Tarefas = ct.Tarefas
            };
        }

        public async Task<int> CreateTarefa(TarefaModel tarefa)
        {
            Cliente cliente = await _clientesRepositorio.SelectCliente(tarefa.IdCliente);
            if (cliente != null)
            {
                return await _tarefasRepositorio.InsertTarefa(
                    new Tarefa { Id = tarefa.Id, Id_Cliente = tarefa.IdCliente, Descricao = tarefa.Descricao });
            }
            else return 0;
        }
    }
}
