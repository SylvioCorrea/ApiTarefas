using System;
using System.Collections.Generic;
using System.Text;

using Dominio;

namespace Aplicacao.Modelos
{
    public class RelatorioModel
    {
        public IEnumerable<ClienteTarefas> ListaClientesTarefas { get; set; }
    }
}
