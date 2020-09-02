using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Aplicacao;
using Aplicacao.Modelos;

namespace ApiTarefas.Controllers
{
    [Route("clientes")]
    [ApiController]
    public class TarefasController : ControllerBase
    {

        private ITarefasServico _tarefasServico;

        public TarefasController(ITarefasServico tarefasServico)
        {
            _tarefasServico = tarefasServico;
        }

        [HttpGet]
        public async Task<IEnumerable<ClienteModel>> GetClientes()
        {
            return await _tarefasServico.GetClientes();
        }

        [HttpGet("{id}")]
        public async Task<ClienteModel> GetCliente(int id)
        {
            return await _tarefasServico.GetCliente(id);
        }

        [HttpGet("{id}/tarefas")]
        public async Task<ClienteTarefasModel> GetTarefas(int id)
        {
            return await _tarefasServico.GetTarefas(id);
        }

        [HttpPost]
        public async Task<int> PostCliente(ClienteModel cliente)
        {
            return await _tarefasServico.CreateCliente(cliente);
        }

        [HttpPost("{id}/tarefas")]
        public async Task<int> PostTarefa(int id, TarefaModel tarefa)
        {
            tarefa.IdCliente = id;
            return await _tarefasServico.CreateTarefa(tarefa);
        }
    }
}
