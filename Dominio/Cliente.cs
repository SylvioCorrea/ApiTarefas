using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dominio
{
    [Table("clientes")]
    public class Cliente
    {
        [Column("id")]
        public int Id{ get; set; }

        [Column("nome")]
        public string Nome { get; set; }

    }
}
