using System;
using System.Linq;
using Evidencia_final_web.Server.Data;
using Evidencia_final_web.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Evidencia_final_web.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest login)
        {
            Console.WriteLine($"INTENTO DE LOGIN - Correo: {login.Correo}");

            var user = _context.Usuarios
                .FirstOrDefault(u =>
                    u.Correo == login.Correo &&
                    u.Contrasena == login.Contrasena);

            if (user == null)
                return Unauthorized(new { mensaje = "Credenciales inválidas" });

            return Ok(new
            {
                id = user.Id,
                token = Guid.NewGuid().ToString(),
                rol = user.Rol
            });
        }
    }
}
