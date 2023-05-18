import './App.css';
import { Link } from "react-router-dom"
import bingus from "./images/bingus.jpg"

export default function Inicio() {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bingus} className="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-5xl font-bold">¡¡Hola, soy Illán!!</h1>
            <p className="py-6">He creado esta web para que puedas conocerme un poco mejor. Puedes consultar mis proyectos, CV y maneras de contactarme.</p>
            <Link to="/cv"><button className="btn btn-primary">Ver CV</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
