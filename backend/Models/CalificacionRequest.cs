namespace Evidencia_final_web.Server.Models
{
    public class CalificacionRequest
    {
        public int AlumnoId { get; set; }
        public int ProfesorId { get; set; }
        public int MateriaId { get; set; }
        public double Valor { get; set; }
    }
}
