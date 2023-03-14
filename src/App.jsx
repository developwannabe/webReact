import * as React from 'react';
import './App.css';
import Inicio from './Inicio';
import Contacto from './Contacto';
import Navi from './Navi.jsx';
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <>
    <Navi/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
    </>
  );
}
