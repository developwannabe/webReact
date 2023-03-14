import * as React from 'react';
import './App.css';
import Inicio from './Inicio';
import Contacto from './Contacto';
import Navi from './Navi.jsx';
import Footer from './Footer.jsx';
import {Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <div class="flex flex-col h-screen justify-between bg-base-200">
      <Navi/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="contacto" element={<Contacto/>} />
          </Routes>
      <Footer/>
    </div>
  );
}
