import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const rol = (localStorage.getItem('rol') || '').toLowerCase();

    const cerrarSesion = () => {
        localStorage.clear();
        window.location.href = '/'; // 🔄 Redirecciona correctamente
    };

    return (
        <div style={containerEstilo}>
            <h2>Bienvenido al Sistema de Calificaciones</h2>
            <p>
                Has iniciado sesión como: <strong style={{ textTransform: 'capitalize' }}>{rol}</strong>
            </p>

            {rol === 'alumno' && (
                <button onClick={() => navigate('/alumno/calificaciones')} style={boton}>
                    Ver mis calificaciones
                </button>
            )}

            {rol === 'profesor' && (
                <>
                    <button onClick={() => navigate('/profesor/registrar')} style={boton}>
                        Registrar calificación
                    </button>
                    <button onClick={() => navigate('/profesor/calificaciones')} style={boton}>
                        Ver calificaciones de alumnos
                    </button>
                </>
            )}

            <button onClick={cerrarSesion} style={botonCerrar}>
                Cerrar sesión
            </button>
        </div>
    );
};

const containerEstilo: React.CSSProperties = {
    background: '#f5f6ff',
    padding: '2rem',
    borderRadius: '10px',
    width: 'fit-content',
    margin: '2rem auto',
    textAlign: 'center'
};

const boton: React.CSSProperties = {
    padding: '10px 20px',
    margin: '10px 0',
    backgroundColor: '#e0e0e0',
    border: '1px solid #bbb',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%'
};

const botonCerrar: React.CSSProperties = {
    ...boton,
    backgroundColor: 'red',
    color: 'white',
    border: 'none'
};

export default Dashboard;
