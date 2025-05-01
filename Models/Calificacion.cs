namespace Evidencia_final_web.Server.Models
{
    public class Calificacion
    {
        public int Id { get; set; }

        public double Valor { get; set; }

        // Relación con el alumno (Usuario)
        public int AlumnoId { get; set; }
        public Usuario Alumno { get; set; }

        // Relación con el profesor (Usuario)
        public int ProfesorId { get; set; }
        public Usuario Profesor { get; set; }

        // Relación con materia
        public int MateriaId { get; set; }
        public Materia Materia { get; set; }
    }
}
