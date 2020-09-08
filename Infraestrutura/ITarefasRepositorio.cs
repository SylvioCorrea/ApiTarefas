﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using Dominio;

namespace Infraestrutura
{
    public interface ITarefasRepositorio
    {
        Task<IEnumerable<Tarefa>> SelectTarefas(int idCliente);
        Task<IEnumerable<Tarefa>> SelectTarefas(string busca, DateTime? maiorQue);
        Task<int> InsertTarefa(Tarefa tarefa);
    }
}
