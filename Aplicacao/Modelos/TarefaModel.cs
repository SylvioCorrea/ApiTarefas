using System;
using System.Collections.Generic;
using System.Text;

using Dominio;

namespace Aplicacao.Modelos
{
    public class TarefaModel
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        public string Descricao { get; set; }
        public DateTime? DataDeCriacao { get; set; }

    }
}
