import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/main.css';
import { esAlumno } from '../services/auth';
import BotonRegresar from './BotonRegresar'; // 👈 Asegúrate de tener este componente

interface Calificacion {
    id: number;
    valor: number;
    materia: {
        nombre: string;
    } | null;
    profesor: {
        nombre: string;
    } | null;
}

const CalificacionesAlumno: React.FC = () => {
    const [calificaciones, setCalificaciones] = useState<Calificacion[]>([]);
    const alumnoId = localStorage.getItem('alumnoId') || '0';

    useEffect(() => {
        if (!esAlumno()) {
            alert('Acceso denegado. Solo los alumnos pueden ver sus calificaciones.');
            window.location.href = '/dashboard';
            return;
        }

        axios
            .get<Calificacion[]>(`https://localhost:7128/api/Calificaciones/alumno/${alumnoId}`)
            .then(response => setCalificaciones(response.data))
            .catch(error => console.error('Error al obtener calificaciones', error));
    }, [alumnoId]);

    return (
        <div className="dashboard">
            <h2>Mis Calificaciones</h2>

            {calificaciones.length === 0 ? (
                <p>No hay calificaciones registradas.</p>
            ) : (
                <table style={{ width: '100%', marginTop: '1rem' }}>
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Calificación</th>
                            <th>Profesor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calificaciones.map((calif) => (
                            <tr key={calif.id}>
                                <td>{calif.materia?.nombre || 'Sin materia'}</td>
                                <td>{calif.valor}</td>
                                <td>{calif.profesor?.nombre || 'Sin profesor'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Botón de regreso al dashboard */}
            <BotonRegresar />
        </div>
    );
};

export default CalificacionesAlumno;
