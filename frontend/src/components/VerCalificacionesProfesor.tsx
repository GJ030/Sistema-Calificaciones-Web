import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { esProfesor } from '../services/auth';
import BotonRegresar from './BotonRegresar'; // ← Asegúrate de tener este componente

interface Calificacion {
    id: number;
    valor: number;
    alumno: {
        nombre: string;
    } | null;
    materia: {
        nombre: string;
    } | null;
}

const VerCalificacionesProfesor: React.FC = () => {
    const [calificaciones, setCalificaciones] = useState<Calificacion[]>([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (!esProfesor()) {
            alert('Acceso denegado. Solo los profesores pueden ver esta vista.');
            window.location.href = '/dashboard';
            return;
        }

        const profesorId = localStorage.getItem('profesorId');
        axios
            .get<Calificacion[]>(`https://localhost:7128/api/Calificaciones/profesor/${profesorId}`)
            .then(response => setCalificaciones(response.data))
            .catch(error => {
                console.error(error);
                setMensaje('❌ Error al cargar las calificaciones');
            });
    }, []);

    return (
        <div className="dashboard">
            <h2>Todas las Calificaciones Registradas</h2>

            {mensaje && <p style={{ color: 'red' }}>{mensaje}</p>}

            {calificaciones.length === 0 && !mensaje ? (
                <p>No hay calificaciones disponibles.</p>
            ) : (
                <table style={{ width: '100%', marginTop: '1rem' }}>
                    <thead>
                        <tr>
                            <th>Alumno</th>
                            <th>Materia</th>
                            <th>Calificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calificaciones.map((calif) => (
                            <tr key={calif.id}>
                                <td>{calif.alumno?.nombre || 'Sin alumno'}</td>
                                <td>{calif.materia?.nombre || 'Sin materia'}</td>
                                <td>{calif.valor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Botón para regresar al dashboard */}
            <BotonRegresar />
        </div>
    );
};

export default VerCalificacionesProfesor;
