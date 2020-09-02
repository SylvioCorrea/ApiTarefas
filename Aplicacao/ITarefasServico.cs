using System;
using System.Collections.Generic;
using System.Text;

using System.Threading.Tasks;

using Aplicacao.Modelos;
using Dominio;

namespace Aplicacao
{
    public interface ITarefasServico
    {
        Task<IEnumerable<ClienteModel>> GetClientes();
        Task<ClienteModel> GetCliente(int id);
        Task<ClienteTarefasModel> GetTarefas(int idCliente);
        Task<int> CreateCliente(ClienteModel cliente);
        Task<int> CreateTarefa(TarefaModel tarefa);
    }
}
