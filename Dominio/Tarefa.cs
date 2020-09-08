using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Dominio
{
    public class Tarefa
    {
        public int Id { get; set; }

        public int Id_Cliente { get; set; }

        public string Descricao { get; set; }

        public DateTime? Data_De_Criacao { get; set; }
    }
}
