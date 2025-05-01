USE CalificacionesDB;
GO

IF OBJECT_ID('dbo.Materias', 'U') IS NOT NULL
    DROP TABLE dbo.Materias;
GO


CREATE TABLE Materias (
    Id INT PRIMARY KEY,
    Nombre NVARCHAR(MAX) NOT NULL
);
GO

INSERT INTO Materias (Id, Nombre) VALUES
(1, 'Matemáticas'),
(2, 'Matemáticas Avanzadas'),
(3, 'Física Moderna'),
(4, 'Programación Orientada a Objetos'),
(5, 'Química Orgánica'),
(6, 'Literatura Universal'),
(7, 'Inglés Avanzado'),
(8, 'Estadística Inferencial'),
(9, 'Bases de Datos Avanzadas'),
(10, 'Redes y Telecomunicaciones'),
(11, 'Ética y Valores Profesionales'),
(12, 'Programación Web'),
(13, 'Matemáticas'),
(14, 'Programación'),
(15, 'Física');
GO
