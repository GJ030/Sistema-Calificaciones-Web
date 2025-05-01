-- Seleccionar base de datos
USE CalificacionesDB;
GO

-- Crear tabla Alumnos
CREATE TABLE Alumnos (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(MAX) NOT NULL,
    Matricula NVARCHAR(MAX) NOT NULL
);
GO

-- Insertar alumno de ejemplo
INSERT INTO Alumnos (Nombre, Matricula)
VALUES ('Juan Pérez', 'A123');
GO
