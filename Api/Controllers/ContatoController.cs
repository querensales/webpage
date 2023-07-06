using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Api.Models;
using Api.Data;
using Microsoft.EntityFrameworkCore;
using Api.Commands;

namespace Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ContatoController : Controller
  {
    private readonly ILogger<ContatoController> _logger;

    public ContatoController(ILogger<ContatoController> logger)
    {
      _logger = logger;
    }


    [HttpGet("buscar-contato")]
    public async Task<IActionResult> Index(
      [FromServices] AppDbContext context
    )
    {
      var contatos = await context
      .Contato
      .OrderByDescending(c => c.DataContato)
      .AsNoTracking()
      .ToListAsync();

      return Ok(contatos);

    }

    [HttpPost("criar-contato")]
    public async Task<IActionResult> CriarContato([FromBody] ContatoCommand command,
    [FromServices] AppDbContext context)
    {

      var contato = new Contato();
      contato.DataContato = DateTime.Now;
      contato.Email = command.Email;
      contato.Mensagem = command.Mensagem;
      contato.Nome = command.Nome;
      contato.Id = Guid.NewGuid();

      await context.AddAsync(contato);
      await context.SaveChangesAsync();

      return Created();
    }
  }
}
