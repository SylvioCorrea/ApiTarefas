using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dominio
{
    public class Cliente
    {
        public int Id{ get; set; }

        public string Nome { get; set; }

    }
}
