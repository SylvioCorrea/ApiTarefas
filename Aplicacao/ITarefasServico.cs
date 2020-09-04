﻿using System;
using System.Collections.Generic;
using System.Text;

using System.Threading.Tasks;

using Aplicacao.Modelos;
using Dominio;

namespace Aplicacao
{
    public interface ITarefasServico
    {
        Task<IEnumerable<TarefaModel>> GetTarefas(int idCliente);
        Task<int> CreateTarefa(TarefaModel tarefa);
    }
}
