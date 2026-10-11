USE CalificacionesDB;
GO

IF OBJECT_ID('dbo.Usuarios', 'U') IS NOT NULL
    DROP TABLE dbo.Usuarios;
GO

CREATE TABLE Usuarios (
    Id INT PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Contrasena NVARCHAR(100) NOT NULL,
    Rol NVARCHAR(20) NOT NULL
);
GO

INSERT INTO Usuarios (Id, Nombre, Email, Contrasena, Rol) VALUES
(1, 'Juan Pérez', 'juan.perez@escuela.com', '1234', 'alumno'),
(2, 'Lucía Gómez', 'lucia.gomez@escuela.com', 'pass1', 'alumno'),
(3, 'Carlos Martínez', 'carlos.m@escuela.com', 'pass1', 'alumno'),
(4, 'María López', 'maria.lopez@escuela.com', 'pass2', 'alumno'),
(5, 'Pedro Ramírez', 'pedro.r@escuela.com', 'pass3', 'alumno'),
(6, 'Laura Torres', 'laura.t@escuela.com', 'pass4', 'alumno'),
(7, 'José Díaz', 'jose.d@escuela.com', 'pass5', 'alumno'),
(8, 'Ana Reyes', 'ana.reyes@escuela.com', 'pass6', 'alumno'),
(9, 'Miguel Romero', 'miguel.r@escuela.com', 'pass7', 'alumno'),
(10, 'Fernanda Salas', 'fernanda.s@escuela.com', 'pass8', 'alumno'),
(11, 'Sofía Herrera', 'sofia.h@escuela.com', 'profe1', 'profesor'),
(12, 'Luis Ortega', 'luis.ortega@escuela.com', 'profe2', 'profesor'),
(13, 'Gabriela Vega', 'gabriela.v@escuela.com', 'profe3', 'profesor'),
(14, 'Andrés Núñez', 'andres.n@escuela.com', 'profe4', 'profesor'),
(15, 'Daniela Ruiz', 'daniela.r@escuela.com', 'profe5', 'profesor'),
(16, 'Raúl Moreno', 'raul.m@escuela.com', 'profe6', 'profesor'),
(17, 'Patricia León', 'patricia.l@escuela.com', 'profe7', 'profesor'),
(18, 'Jorge Silva', 'jorge.s@escuela.com', 'profe8', 'profesor'),
(19, 'Alejandra Cruz', 'ale.cruz@escuela.com', 'profe9', 'profesor'),
(20, 'Víctor Navarro', 'victor.n@escuela.com', 'profe10', 'profesor'),
(21, 'Juan Pérez', 'profesor@escuela.com', '1234', 'Profesor'),
(22, 'Luis Ramírez', 'alumno@escuela.com', '1234', 'Alumno'),
(23, 'Juan Pérez', 'juan@profesor.com', '12345', 'Profesor'),
(24, 'Ana Gómez', 'ana@alumno.com', '12345', 'Alumno');
GO
