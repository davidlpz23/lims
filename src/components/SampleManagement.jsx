import React, { useState } from 'react';
import './SampleManagement.css';

const SampleManagement = () => {
    const [sampleData, setSampleData] = useState({
        productName: '',
        lotNumber: '',
        receptionDate: '',
        uniqueEntryId: '',
        clientProviderData: '',
        sampleType: '',
        storageConditions: '',
        observations: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSampleData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and submit the data to the server
        console.log(sampleData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="productName">Nombre del Producto:</label>
                <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    value={sampleData.productName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="lotNumber">Número de Lote:</label>
                <input
                    type="text"
                    className="form-control"
                    id="lotNumber"
                    name="lotNumber"
                    value={sampleData.lotNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="receptionDate">Fecha de Recepción:</label>
                <input
                    type="date"
                    className="form-control"
                    id="receptionDate"
                    name="receptionDate"
                    value={sampleData.receptionDate}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="uniqueEntryId">Consecutivo Único de Ingreso al Software LIMS:</label>
                <input
                    type="text"
                    className="form-control"
                    id="uniqueEntryId"
                    name="uniqueEntryId"
                    value={sampleData.uniqueEntryId}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="clientProviderData">Datos del Cliente/Proveedor:</label>
                <input
                    type="text"
                    className="form-control"
                    id="clientProviderData"
                    name="clientProviderData"
                    value={sampleData.clientProviderData}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="sampleType">Tipo de Muestra:</label>
                <input
                    type="text"
                    className="form-control"
                    id="sampleType"
                    name="sampleType"
                    value={sampleData.sampleType}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="storageConditions">Condiciones de Almacenamiento:</label>
                <input
                    type="text"
                    className="form-control"
                    id="storageConditions"
                    name="storageConditions"
                    value={sampleData.storageConditions}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="observations">Observaciones:</label>
                <input
                    type="text"
                    className="form-control"
                    id="observations"
                    name="observations"
                    value={sampleData.observations}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default SampleManagement;