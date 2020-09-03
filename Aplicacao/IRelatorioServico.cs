using System.Collections.Generic;
using System.Threading.Tasks;

namespace Aplicacao
{
    public interface IRelatorioServico
    {
        Task<IEnumerable<ClienteTarefasModel>> GetRelatorio();
    }
}