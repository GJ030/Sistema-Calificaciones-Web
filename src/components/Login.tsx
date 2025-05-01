import React, { useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

interface LoginResponse {
    id: number;
    token: string;
    rol: string;
}

const Login: React.FC = () => {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post<LoginResponse>(
                '/api/auth/login',
                { correo, contrasena },
                { headers: { 'Content-Type': 'application/json' } }
            );

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('rol', response.data.rol);

            if (response.data.rol.toLowerCase() === 'alumno') {
                localStorage.setItem('alumnoId', response.data.id.toString());
            } else if (response.data.rol.toLowerCase() === 'profesor') {
                localStorage.setItem('profesorId', response.data.id.toString());
            }

            window.location.href = '/dashboard';
        } catch {
            alert('Login incorrecto');
        }
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
            <h2>Iniciar Sesión</h2>

            <div>
                <label htmlFor="correo">Correo electrónico</label>
                <input
                    id="correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="contrasena">Contraseña</label>
                <input
                    id="contrasena"
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Ingresar</button>
        </form>
    );
};

export default Login;
 