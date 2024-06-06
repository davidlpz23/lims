import React, { useState } from 'react';

const BuscadorMuestras = ({ onBuscar }) => {

    const [inputvalue, setInputValue] = useState(''); // Definir el estado inputvalue y la función setInputValue

    return (
        <div>
            <label htmlFor="search-input">Buscar muestra:</label>
            <input
                id="search-input"   
                type="text"
                placeholder="Buscar muestra por nombre, lote o consecutivo..."
                value={inputvalue} 
                onChange={(e) => onBuscar(e.target.value)}
            />
        </div>
    );
};

export default BuscadorMuestras;
