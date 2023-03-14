import * as React from 'react';
import './App.css';
import Navi from './Navi.jsx';
import Footer from './Footer.jsx';

export default function Inicio() {
  return (
    <div class="flex flex-col h-screen justify-between bg">
      <Navi />
      <div class="hero min-h-fit-content bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
