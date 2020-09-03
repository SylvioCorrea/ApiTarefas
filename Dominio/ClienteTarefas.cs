using System;
using System.Collections.Generic;
using System.Text;

namespace Dominio
{
    public class ClienteTarefas
    {
        public Cliente Cliente { get; set; }
        public IList<Tarefa> Tarefas { get; set; }
    }
}
