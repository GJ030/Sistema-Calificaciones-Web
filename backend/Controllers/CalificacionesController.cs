using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Evidencia_final_web.Server.Data;
using Evidencia_final_web.Server.Models;

namespace Evidencia_final_web.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalificacionesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CalificacionesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("alumno/{id}")]
        public async Task<IActionResult> GetByAlumno(int id)
        {
            var calificaciones = await _context.Calificaciones
                .Where(c => c.AlumnoId == id)
                .Include(c => c.Materia)
                .Include(c => c.Profesor)
                .ToListAsync();

            return Ok(calificaciones);
        }

        [HttpGet("profesor/{id}")]
        public async Task<IActionResult> GetByProfesor(int id)
        {
            var calificaciones = await _context.Calificaciones
                .Where(c => c.ProfesorId == id)
                .Include(c => c.Materia)
                .Include(c => c.Alumno)
                .ToListAsync();

            return Ok(calificaciones);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CalificacionRequest model)
        {
            try
            {
                var alumno = await _context.Usuarios
                    .FirstOrDefaultAsync(u => u.Id == model.AlumnoId && EF.Functions.Like(u.Rol, "alumno"));

                var profesor = await _context.Usuarios
                    .FirstOrDefaultAsync(u => u.Id == model.ProfesorId && EF.Functions.Like(u.Rol, "profesor"));

                var materia = await _context.Materias.FindAsync(model.MateriaId);

                if (alumno == null || profesor == null || materia == null)
                {
                    return BadRequest("Alumno, materia o profesor no válido.");
                }

                var nueva = new Calificacion
                {
                    AlumnoId = model.AlumnoId,
                    ProfesorId = model.ProfesorId,
                    MateriaId = model.MateriaId,
                    Valor = model.Valor
                };

                _context.Calificaciones.Add(nueva);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetByAlumno), new { id = model.AlumnoId }, nueva);
            }
            catch (Exception ex)
            {
                Console.WriteLine("❌ Error interno: " + ex.Message);
                return StatusCode(500, "Error interno del servidor: " + ex.Message);
            }
        }
    }
}
