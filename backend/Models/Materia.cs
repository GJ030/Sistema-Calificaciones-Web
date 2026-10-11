using System.Collections.Generic;

namespace Evidencia_final_web.Server.Models
{
    public class Materia
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        public ICollection<Calificacion> Calificaciones { get; set; }
    }
}
