import React from "react";
import '../assets/css/Header.css'
function Header({ titulo }) {
  return (
    <>
      <header>
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand text-size" href="#!" >
              {titulo}
            </a> 
       
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

