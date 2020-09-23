using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Aplicacao.Modelos;
using Dominio;

namespace Aplicacao
{
    public class ClienteTarefasModel
    {
        public ClienteModel Cliente { get; set; }
        public IEnumerable<TarefaModel> Tarefas { get; set; }

        public ClienteTarefasModel() { }
        public ClienteTarefasModel(ClienteTarefas clienteTarefas)
        {
            Cliente = new ClienteModel(clienteTarefas.Cliente);
            Tarefas = clienteTarefas.Tarefas.Select(t => new TarefaModel(t));
        }
    }
}
