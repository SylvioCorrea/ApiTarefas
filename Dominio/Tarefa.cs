using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Dominio
{
    [Table("tarefas")]
    public class Tarefa
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("id_cliente")]
        public int Id_Cliente { get; set; }

        [Column("descricao")]
        public string Descricao { get; set; }
    }
}
