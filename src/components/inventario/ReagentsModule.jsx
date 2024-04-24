import React, { useState } from 'react';

const ReagentsModule = () => {
    const [nombre, setNombre] = useState('');
    const [numeroLote, setNumeroLote] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [proveedor, setProveedor] = useState('');
    const [fechaAdquisicion, setFechaAdquisicion] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [inventario, setInventario] = useState([]); // Definir la variable inventario como un array vacío

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleNumeroLoteChange = (event) => {
        setNumeroLote(event.target.value);
    };

    const handleCantidadChange = (event) => {
        setCantidad(event.target.value);
    };

    const handleProveedorChange = (event) => {
        setProveedor(event.target.value);
    };

    const handleFechaAdquisicionChange = (event) => {
        setFechaAdquisicion(event.target.value);
    };

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    const handleBuscarClick = () => {
        // Realizar la búsqueda en el inventario utilizando la función map
        // y actualizar los resultados de búsqueda en el estado
        const resultados = inventario.filter((reactivo) => {
            return reactivo.nombre.includes(busqueda) || reactivo.numeroLote.includes(busqueda);
        });
        setResultadosBusqueda(resultados);
    };

    return (
        <div>
            <h1>Módulo de Reactivos</h1>

            <h2>Agregar Reactivo</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre del Reactivo:</label>
                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={handleNombreChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="numeroLote">Número de Lote:</label>
                    <input type="text" className="form-control" id="numeroLote" value={numeroLote} onChange={handleNumeroLoteChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input type="number" className="form-control" id="cantidad" value={cantidad} onChange={handleCantidadChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="proveedor">Proveedor:</label>
                    <input type="text" className="form-control" id="proveedor" value={proveedor} onChange={handleProveedorChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="fechaAdquisicion">Fecha de Adquisición:</label>
                    <input type="date" className="form-control" id="fechaAdquisicion" value={fechaAdquisicion} onChange={handleFechaAdquisicionChange} />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>

            <h2>Búsqueda y Consulta de Inventario</h2>
            <div className="form-group">
                <label htmlFor="busqueda">Búsqueda por Nombre o Lote:</label>
                <input type="text" className="form-control" id="busqueda" value={busqueda} onChange={handleBusquedaChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleBuscarClick}>Buscar</button>

            <h3>Resultados de Búsqueda:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Número de Lote</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {resultadosBusqueda.map((reactivo) => (
                        <tr key={reactivo.id}>
                            <td>{reactivo.nombre}</td>
                            <td>{reactivo.numeroLote}</td>
                            <td>{reactivo.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReagentsModule;
