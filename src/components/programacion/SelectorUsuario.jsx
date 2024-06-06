import React from 'react';

const SelectorUsuario = ({ usuarios, onAsignar }) => {
    return (
        <select onChange={(e) => onAsignar(e.target.value)}>
            {usuarios.map((usuario) => (
                <option key={usuario.id} value={usuario.id}>
                    {usuario.nombre}
                </option>
            ))}
        </select>
    );
};

export default SelectorUsuario;