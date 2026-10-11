# Sistema-Calificaciones-Web

Aplicación web para registrar y consultar **calificaciones escolares**. Los profesores capturan calificaciones por alumno y materia, y los alumnos consultan las suyas después de iniciar sesión. La base de datos se llama `CalificacionesDB`.

Es la evidencia final del curso; cada carpeta conserva el historial de commits del repositorio original.

## Estructura

| Carpeta | Contenido |
|---|---|
| [`backend`](backend) | API en **ASP.NET Core (.NET 8)** con Entity Framework Core y SQL Server. Endpoints `POST api/auth/login` y `api/calificaciones` (consulta por alumno o profesor y registro). Incluye Swagger. |
| [`frontend`](frontend) | Cliente en **React 19 + TypeScript + Vite**. Pantallas de login, dashboard por rol (alumno o profesor), registro de calificaciones y consulta de calificaciones. |
| [`db`](db) | Scripts SQL Server que crean las tablas `Alumnos`, `Calificaciones`, `Materias` y `Usuarios` en `CalificacionesDB`. |

## Cómo ejecutarlo

1. Crear la base `CalificacionesDB` en SQL Server y ejecutar los scripts de [`db`](db) (también se pueden aplicar las migraciones de EF Core con `dotnet ef database update`).
2. Revisar la cadena de conexión `DefaultConnection` en `backend/appsettings.json`.
3. Iniciar la API:

   ```bash
   cd backend
   dotnet run
   ```

4. Iniciar el cliente:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Tecnologías

C#, ASP.NET Core, Entity Framework Core, SQL Server, React, TypeScript y Vite.
