﻿using System;
using System.Collections.Generic;
using System.Text;

using Dominio;

namespace Aplicacao.Modelos
{
    public class ClienteModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public ClienteModel() { }
        public ClienteModel(Cliente cliente)
        {
            Id = cliente.Id;
            Nome = cliente.Nome;
        }
    }
}
