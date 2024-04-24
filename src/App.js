import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import SampleManagement from './components/SampleManagement';
import './components/inventario/StandardsModule.css';
import StandardsModule from './components/inventario/StandardsModule';
import ReagentsModule from './components/inventario/ReagentsModule';
import EquipmentModule from './components/inventario/EquipmentModule'; // Importa el componente EquipmentModule
import UserManagement from './components/UserManagement';


function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <SampleManagement />
      <StandardsModule />
      <ReagentsModule />
      <EquipmentModule /> {/* Utiliza el componente EquipmentModule */}
      <UserManagement />
      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
