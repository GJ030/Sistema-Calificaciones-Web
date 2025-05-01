import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CalificacionesAlumno from './components/CalificacionesAlumno';
import RegistrarCalificacion from './components/RegistrarCalificacion';
import VerCalificacionesProfesor from './components/VerCalificacionesProfesor';

const App: React.FC = () => {
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol')?.toLowerCase();

    return (
        <Router>
            <Routes>
                <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
                <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
                <Route path="/alumno/calificaciones" element={token && rol === 'alumno' ? <CalificacionesAlumno /> : <Navigate to="/" />} />
                <Route path="/profesor/registrar" element={token && rol === 'profesor' ? <RegistrarCalificacion /> : <Navigate to="/" />} />
                <Route path="/profesor/calificaciones" element={token && rol === 'profesor' ? <VerCalificacionesProfesor /> : <Navigate to="/" />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
