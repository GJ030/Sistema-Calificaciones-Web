using Microsoft.EntityFrameworkCore;
using Evidencia_final_web.Server.Models;

namespace Evidencia_final_web.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Materia> Materias { get; set; }
        public DbSet<Calificacion> Calificaciones { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Calificacion>()
                .HasOne(c => c.Alumno)
                .WithMany(u => u.CalificacionesComoAlumno)
                .HasForeignKey(c => c.AlumnoId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Calificacion>()
                .HasOne(c => c.Profesor)
                .WithMany(u => u.CalificacionesComoProfesor)
                .HasForeignKey(c => c.ProfesorId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Calificacion>()
                .HasOne(c => c.Materia)
                .WithMany(m => m.Calificaciones)
                .HasForeignKey(c => c.MateriaId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
