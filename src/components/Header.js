import React from "react";
import logo from '../assets/img/sol.png';
import '../assets/css/Header.css'
function Header({ titulo }) {
  return (
    <>
      <header>
      <div className="App">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand text-size" href="#!" >
            <img src={logo} className="App-logo" alt="logo" />  {titulo}
            </a>        
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

