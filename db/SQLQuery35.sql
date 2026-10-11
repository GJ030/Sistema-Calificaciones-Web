
USE CalificacionesDB;
GO


IF OBJECT_ID('dbo.Calificaciones', 'U') IS NOT NULL
    DROP TABLE dbo.Calificaciones;
GO


CREATE TABLE Calificaciones (
    Id INT PRIMARY KEY IDENTITY(1,1),
    AlumnoId INT NOT NULL,
    MateriaId INT NOT NULL,
    ProfesorId INT NOT NULL,
    Valor FLOAT NOT NULL CHECK (Valor >= 0 AND Valor <= 10),

    --
    FOREIGN KEY (AlumnoId) REFERENCES Alumnos(Id),
    FOREIGN KEY (MateriaId) REFERENCES Materias(Id),
    FOREIGN KEY (ProfesorId) REFERENCES Usuarios(Id) 
);
GO

INSERT INTO Calificaciones (AlumnoId, MateriaId, ProfesorId, Valor) VALUES
(1, 1, 1, 9.5),
(1, 1, 1, 9.5),
(1, 1, 1, 9.5),
(1, 1, 1, 9.5),
(1, 1, 1, 10.0),
(1, 1, 1, 9.8),
(1, 1, 1, 9.0),
(2, 2, 1, 8.5),
(2, 3, 1, 7.8),
(3, 1, 1, 6.5),
(3, 1, 1, 8.0),
(3, 3, 1, 8.0),
(1, 2, 20, 9.8);
GO
