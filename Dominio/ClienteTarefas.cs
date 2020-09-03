using System;
using System.Collections.Generic;
using System.Text;

namespace Dominio
{
    public class ClienteTarefas
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public IList<Tarefa> Tarefas { get; set; }
    }
}
