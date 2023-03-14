import { Link } from "react-router-dom"

function Navi() {
  return (
    <header class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Inicio</Link></li>
        <li tabindex="0">
          <a class="justify-between">
            Proyectos
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><Link to="/universidad">Universidad</Link></li>
            <li><Link to="/personal">Personales</Link></li>
          </ul>
        </li>
        <li><Link to ="/cv">CV</Link></li>
      </ul>
    </div>
    <Link to ="/" class="px-10 normal-case text-xl">Illán Martínez</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 rounded-box">
      <li><Link to="/">Inicio</Link></li>
      <li tabindex="0">
        <a>
          Proyectos
          <svg class="fill-current " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 rounded-box">
          <li><Link to="/universidad">Universidad</Link></li>
          <li><Link to="/personal">Personales</Link></li>
        </ul>
      </li>
      <li><Link to ="/cv">CV</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <Link to ="/contacto" class="btn">Contacto</Link>
  </div>
</header>
  );
}

export default Navi;
