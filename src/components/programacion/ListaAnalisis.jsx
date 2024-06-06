import React from 'react';

const ListaAnalisis = ({ analisis, onSeleccionar }) => {
    return (
        <ul>
            {analisis.map((item) => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.seleccionado}
                            onChange={() => onSeleccionar(item.id)}
                        />
                        {item.nombre}
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default ListaAnalisis;