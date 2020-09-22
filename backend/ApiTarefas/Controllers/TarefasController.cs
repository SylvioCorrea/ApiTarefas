using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Aplicacao;
using Aplicacao.Modelos;
using Microsoft.AspNetCore.Cors;

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
        public async Task<IEnumerable<TarefaModel>> GetTarefas(int id)
        {
            return await _tarefasServico.GetTarefas(id);
        }

        //Formato de entrada para data: mm-dd-aaaa
        [HttpGet("tarefas")]
        public async Task<IEnumerable<TarefaModel>> GetTarefas([FromQuery]string contem, DateTime? dataMaiorQue)
        {
            return await _tarefasServico.GetTarefas(contem, dataMaiorQue);
        }

        [HttpPost]
        public async Task<int> PostCliente(ClienteModel cliente)
        {
            return await _clientesServico.CreateCliente(cliente);
        }

        //formato de entrada para data no json: aaaa-mm-dd
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
        public async Task<RelatorioModel> GetRelatorio()
        {
            return await _relatorioServico.GetRelatorio();
        }
    }
}
