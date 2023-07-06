using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Commands;

namespace Api.Models
{
    public class Contato
    {

        public Guid Id { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Mensagem { get; set; }

        public DateTime DataContato { get; set; }
    }
}
