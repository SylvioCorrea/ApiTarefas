using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

using Infraestrutura;
using Dominio;

namespace Aplicacao
{
    public class RelatorioServico : IRelatorioServico
    {
        private IRelatorioRepositorio _relatorioRepositorio;

        public RelatorioServico(IRelatorioRepositorio relatorioRepositorio)
        {
            _relatorioRepositorio = relatorioRepositorio;
        }

        public async Task<IEnumerable<ClienteTarefasModel>> GetRelatorio()
        {
            var lista = await _relatorioRepositorio.SelectRelatorio();
            return lista.Select(ct => new ClienteTarefasModel { Id = ct.Id, Nome = ct.Nome, Tarefas = ct.Tarefas });
        }
    }
}
