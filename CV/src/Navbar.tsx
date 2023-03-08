import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Navbar.css'

export function Navbar() {

  return (
    <div className='nav'>
        <div className='nav button' id='Inicio'>
          Inicio
        </div>
        <div className='nav button' id='Proyectos'>
          Proyectos
        </div>
        <div className='nav button' id='Redes Sociales'>
          Redes Sociales
        </div>
        <div className='nav button' id='Contacto'>
          Contacto
        </div>
    </div>
  )
}
