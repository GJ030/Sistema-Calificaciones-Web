using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Evidencia_final_web.Server.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        // Mapea la propiedad 'Correo' a la columna 'Email' en la base de datos
        [Column("Email")]
        public string Correo { get; set; }

        public string Contrasena { get; set; }
        public string Rol { get; set; }

        // Navegación como Alumno
        public ICollection<Calificacion> CalificacionesComoAlumno { get; set; }

        // Navegación como Profesor
        public ICollection<Calificacion> CalificacionesComoProfesor { get; set; }
    }
}
