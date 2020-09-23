using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Dominio;

namespace Aplicacao.Modelos
{
    public class RelatorioModel
    {
        public IEnumerable<ClienteTarefasModel> ListaClientesTarefas { get; set; }

        public RelatorioModel() { }
        public RelatorioModel(Relatorio relatorio)
        {
            ListaClientesTarefas = relatorio.ListaClientesTarefas.Select(clienteTarefas => new ClienteTarefasModel(clienteTarefas));
        }
    }
}
