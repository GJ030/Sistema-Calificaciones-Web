import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/main.css';
import { esProfesor } from '../services/auth';
import BotonRegresar from './BotonRegresar';

const RegistrarCalificacion: React.FC = () => {
    const [alumnoId, setAlumnoId] = useState('');
    const [materiaId, setMateriaId] = useState('');
    const [valor, setValor] = useState('');
    const [mensaje, setMensaje] = useState('');

    const profesorId = parseInt(localStorage.getItem('profesorId') || '1');

    useEffect(() => {
        if (!esProfesor()) {
            alert('Acceso denegado. Solo los profesores pueden registrar calificaciones.');
            window.location.href = '/dashboard';
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('https://localhost:7128/api/Calificaciones', {
                alumnoId: parseInt(alumnoId),
                materiaId: parseInt(materiaId),
                profesorId: profesorId,
                valor: parseFloat(valor),
            });

            setMensaje('✅ Calificación registrada correctamente');
            setAlumnoId('');
            setMateriaId('');
            setValor('');
        } catch (error) {
            console.error(error);
            setMensaje('❌ Error al registrar la calificación');
        }
    };

    return (
        <div className="dashboard">
            <h2>Registrar Calificación</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="alumnoId">ID del Alumno</label>
                <input
                    type="number"
                    id="alumnoId"
                    value={alumnoId}
                    onChange={(e) => setAlumnoId(e.target.value)}
                    required
                />

                <label htmlFor="materiaId">ID de la Materia</label>
                <input
                    type="number"
                    id="materiaId"
                    value={materiaId}
                    onChange={(e) => setMateriaId(e.target.value)}
                    required
                />

                <label htmlFor="valor">Calificación</label>
                <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    id="valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                />

                <button type="submit">Registrar</button>
            </form>

            {mensaje && <p style={{ marginTop: '1rem' }}>{mensaje}</p>}

            {/* Botón para regresar */}
            <BotonRegresar />
        </div>
    );
};

export default RegistrarCalificacion;
