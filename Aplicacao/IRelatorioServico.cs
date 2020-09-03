using System.Collections.Generic;
using System.Threading.Tasks;

using Aplicacao.Modelos;

namespace Aplicacao
{
    public interface IRelatorioServico
    {
        Task<RelatorioModel> GetRelatorio();
    }
}