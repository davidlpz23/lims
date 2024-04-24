import React, { useState } from 'react';

const EquipmentModule = () => {
    const [nombreEquipo, setNombreEquipo] = useState('');
    const [numeroSerie, setNumeroSerie] = useState('');
    const [fechaAdquisicion, setFechaAdquisicion] = useState('');
    const [fechaCalibracion, setFechaCalibracion] = useState('');
    const [proximaCalibracion, setProximaCalibracion] = useState('');
    const [mantenimiento, setMantenimiento] = useState('');
    const [usuarioMantenimiento, setUsuarioMantenimiento] = useState('');
    const [fechaMantenimiento, setFechaMantenimiento] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
    const [inventario, setInventario] = useState([]); // Definir la variable inventario como un array vacío
    const [camposActualizados, setCamposActualizados] = useState([]);

    const handleMantenimiento = (event) => {
        setMantenimiento(event.target.value);
    };

    const handleActualizarDatos = (event) => {
        const campoActualizado = event.target.name;
        const valorActualizado = event.target.value;

        setCamposActualizados((prevCamposActualizados) => ({
            ...prevCamposActualizados,
            [campoActualizado]: valorActualizado,
        }));
    };

    const handleBuscarClick = () => {
        // Lógica de búsqueda utilizando la función map y actualizando los resultados en el estado
        const resultados = inventario.filter((equipo) => {
            return equipo.nombreEquipo.includes(busqueda) || equipo.numeroSerie.includes(busqueda);
        });
        setResultadosBusqueda(resultados);      
    }; 

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    
    return (
        <div>
            <h2>Módulo de Equipos</h2>
            <form>
                <div className="form-group">
                    <label>Nombre del Equipo</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombreEquipo}
                        onChange={(event) => setNombreEquipo(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Número de Serie</label>
                    <input
                        type="text"
                        className="form-control"
                        value={numeroSerie}
                        onChange={(event) => setNumeroSerie(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Adquisición</label>
                    <input
                        type="date"
                        className="form-control"
                        value={fechaAdquisicion}
                        onChange={(event) => setFechaAdquisicion(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Calibración</label>
                    <input
                        type="date"
                        className="form-control"
                        value={fechaCalibracion}
                        onChange={(event) => setFechaCalibracion(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Próxima Calibración</label>
                    <input
                        type="date"
                        className="form-control"
                        value={proximaCalibracion}
                        onChange={(event) => setProximaCalibracion(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Programar Mantenimiento o Calibración</label>
                    <select
                        className="form-control"
                        value={mantenimiento}
                        onChange={handleMantenimiento}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="calibracion">Calibración</option>
                    </select>
                </div>
                {mantenimiento && (
                    <div className="form-group">
                        <label>Usuario de Mantenimiento</label>
                        <input
                            type="text"
                            className="form-control"
                            value={usuarioMantenimiento}
                            onChange={(event) => setUsuarioMantenimiento(event.target.value)}
                        />
                    </div>
                )}
                {mantenimiento && (
                    <div className="form-group">
                        <label>Fecha de Mantenimiento</label>
                        <input
                            type="date"
                            className="form-control"
                            value={fechaMantenimiento}
                            onChange={(event) => setFechaMantenimiento(event.target.value)}
                        />
                    </div>
                )}
                <button type="button" className="btn btn-primary" onClick={handleBuscarClick}>
                    Buscar
                </button>
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
                        <th> Nombre del Equipo </th>
                        <th> Número de Serie </th>
                        <th> Fecha de Adquisición </th>
                        <th> Fecha de Calibración </th>
                        <th> Próxima Calibración </th>
                   </tr>
                </thead>    
                <tbody>
                    {resultadosBusqueda.map((equipo) => (
                        <tr key={equipo.id}>
                            <td>{equipo.nombreEquipo}</td>
                            <td>{equipo.numeroSerie}</td>
                            <td>{equipo.fechaAdquisicion}</td>
                            <td>{equipo.fechaCalibracion}</td>
                            <td>{equipo.proximaCalibracion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default EquipmentModule;