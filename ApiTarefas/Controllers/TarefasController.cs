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
        private IClientesServico _clientesServico;
        private IRelatorioServico _relatorioServico;

        public TarefasController(ITarefasServico tarefasServico, IClientesServico clientesServico, IRelatorioServico relatorioServico)
        {
            _tarefasServico = tarefasServico;
            _clientesServico = clientesServico;
            _relatorioServico = relatorioServico;
        }

        [HttpGet]
        public async Task<IEnumerable<ClienteModel>> GetClientes()
        {
            return await _clientesServico.GetClientes();
        }

        [HttpGet("{id}")]
        public async Task<ClienteModel> GetCliente(int id)
        {
            return await _clientesServico.GetCliente(id);
        }

        [HttpGet("{id}/tarefas")]
        public async Task<ClienteTarefasModel> GetTarefas(int id)
        {
            return await _tarefasServico.GetTarefas(id);
        }

        [HttpPost]
        public async Task<int> PostCliente(ClienteModel cliente)
        {
            return await _clientesServico.CreateCliente(cliente);
        }

        [HttpPost("{id}/tarefas")]
        public async Task<IActionResult> PostTarefa(int id, TarefaModel tarefa)
        {
            tarefa.IdCliente = id;
            int linhasModificadas = await _tarefasServico.CreateTarefa(tarefa);
            if (linhasModificadas > 0)
            {
                return Ok(linhasModificadas);
            }
            else
            {
                return BadRequest(new { mensagem = "A tarefa não pode ser inserida" });
            }
        }

        [HttpGet("relatorio")]
        public async Task<IEnumerable<ClienteTarefasModel>> GetRelatorio()
        {
            return await _relatorioServico.GetRelatorio();
        }
    }
}
