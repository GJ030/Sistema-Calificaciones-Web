namespace Evidencia_final_web.Server.Models
{
    public class Profesor
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;

        public ICollection<Calificacion>? Calificaciones { get; set; }
    }
}
