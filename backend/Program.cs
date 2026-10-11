using Microsoft.EntityFrameworkCore;
using Evidencia_final_web.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Servicios MVC + JSON (evita referencias cíclicas y mejora compatibilidad JSON)
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
        options.JsonSerializerOptions.Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping;
    });

// Documentación Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS global
builder.Services.AddCors();

// Conexión a base de datos SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// [Opcional futuro] Si usas identidad o autenticación personalizada, lo pondrías aquí
// builder.Services.AddAuthentication(...);
// builder.Services.AddAuthorization(...);

var app = builder.Build();

// Habilitar archivos estáticos (React o cualquier frontend)
app.UseDefaultFiles();
app.UseStaticFiles();

// Swagger solo en desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Activar CORS (actualmente permite todo)
app.UseCors(policy =>
    policy.AllowAnyOrigin()
          .AllowAnyMethod()
          .AllowAnyHeader());

// Middleware de seguridad (a futuro si usas [Authorize])
app.UseAuthorization();

// Mapeo de controladores
app.MapControllers();

// Soporte SPA (React o Angular)
app.MapFallbackToFile("/index.html");

app.Run();
