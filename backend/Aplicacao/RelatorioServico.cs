using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

using Infraestrutura;
using Dominio;
using Aplicacao.Modelos;

namespace Aplicacao
{
    public class RelatorioServico : IRelatorioServico
    {
        private IRelatorioRepositorio _relatorioRepositorio;

        public RelatorioServico(IRelatorioRepositorio relatorioRepositorio)
        {
            _relatorioRepositorio = relatorioRepositorio;
        }

        public async Task<RelatorioModel> GetRelatorio()
        {
            var relatorio = await _relatorioRepositorio.SelectRelatorio();
            return new RelatorioModel(relatorio);
        }
    }
}
