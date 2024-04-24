import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const StandardsModule = () => {
    const [standards, setStandards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Perform search logic here based on searchTerm
        // Update standards state with search results
    };

    return (
        <div>
            <h2>Módulo de Estándares</h2>

            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre del Estándar</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del estándar" />
                </Form.Group>

                <Form.Group controlId="formLotNumber">
                    <Form.Label>Número de Lote</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el número de lote" />
                </Form.Group>

                <Form.Group controlId="formConcentration">
                    <Form.Label>Concentración</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la concentración" />
                </Form.Group>

                <Form.Group controlId="formValidation">
                    <Form.Label>Validación de Lote</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la validación de lote" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>

            <hr />

            <h3>Búsqueda y Consulta de Inventario</h3>

            <Form>
                <Form.Group controlId="formSearch">
                    <Form.Label>Búsqueda por Nombre o Lote</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre o número de lote a buscar"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleSearch}>
                    Buscar
                </Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre del Estándar</th>
                        <th>Número de Lote</th>
                        <th>Concentración</th>
                        <th>Validación de Lote</th>
                    </tr>
                </thead>
                <tbody>
                    {standards.map((standard) => (
                        <tr key={standard.id}>
                            <td>{standard.name}</td>
                            <td>{standard.lotNumber}</td>
                            <td>{standard.concentration}</td>
                            <td>{standard.validation}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default StandardsModule;