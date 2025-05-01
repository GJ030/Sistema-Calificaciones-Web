import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotonRegresar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <button
            style={{
                marginTop: '1.5rem',
                padding: '8px 16px',
                backgroundColor: '#444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            onClick={() => navigate('/dashboard')}
        >
            ⬅️ Regresar
        </button>
    );
};

export default BotonRegresar;