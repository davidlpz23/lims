import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import SampleManagement from './components/SampleManagement';
import './components/inventario/StandardsModule.css';
import StandardsModule from './components/inventario/StandardsModule';
import ReagentsModule from './components/inventario/ReagentsModule';
import EquipmentModule from './components/inventario/EquipmentModule';
import UserManagement from './components/UserManagement';
import AnalysisProgramming from './components/programacion/AnalysisProgramming';

function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sample-management" element={<SampleManagement />} />
          <Route path="/path_to_StandardsModule" element={<StandardsModule />} />
          <Route path="/path_to_ReagentsModule" element={<ReagentsModule />} />
          <Route path="/path_to_EquipmentModule" element={<EquipmentModule />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/analysis-programming" element={<AnalysisProgramming />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;