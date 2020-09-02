using System;
using System.Collections.Generic;
using System.Text;

using Dominio;

namespace Aplicacao
{
    public class ClienteTarefasModel
    {
        public int Id{ get; set; }
        public string Nome { get; set; }
        public IEnumerable<Tarefa> Tarefas { get; set; }
    }
}
