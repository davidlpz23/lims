import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserManagement = () => {
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedAccountManagement, setSelectedAccountManagement] = useState('');

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const handleAccountManagementChange = (e) => {  // Crear la función handleAccountManagementChange    
        setSelectedAccountManagement(e.target.value);  // Actualizar el estado selectedAccountManagement con el valor seleccionado del formulario       
    };

    
    return (
        <div>
            <h1>Módulo de Usuarios</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="roleSelect">
                    <Form.Label>Rol y Permisos:</Form.Label>
                    <Form.Control as="select" value={selectedRole} onChange={handleRoleChange}>
                        <option value="">Seleccione un rol</option>
                        <option value="Usuario Básico">Usuario Básico</option>
                        <option value="Auxiliar de Recepción">Auxiliar de Recepción</option>
                        <option value="Administrador de Datos de Laboratorio">Administrador de Datos de Laboratorio</option>
                        <option value="Analista">Analista</option>
                        <option value="Coordinador">Coordinador</option>
                        <option value="Administrador de Inventario">Administrador de Inventario</option>
                        <option value="Analista Programador de Actividades">Analista Programador de Actividades</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            
                <Form.Group controlId="accountManagementSelect">
                    <Form.Label>Administración de Cuentas:</Form.Label>
                    <Form.Control as="select" value={selectedAccountManagement} onChange={handleAccountManagementChange}>
                        <option value="">Seleccione una opción</option>
                        <option value="Crear Cuenta">Crear Cuenta</option>
                        <option value="Modificar Cuenta">Modificar Cuenta</option>
                        <option value="Eliminar Cuenta">Eliminar Cuenta</option>
                    </Form.Control> 
                </Form.Group>
            </Form>
               
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            

        </div>
    );
};

export default UserManagement;


