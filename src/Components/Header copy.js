import React from "react";
import logo from '../img/pad.png';


const Header = ({ title, subtitle }) => {
  return (
    <header>
    <div className="menu">
      <h1>{title}</h1>
              <p>Katalog giereczkowy</p><img src={logo} className="App-logo" alt="logo" />
              <h1>{subtitle}</h1>
              <p>Aplikacja Julii Koszlak</p>
      </div>
    </header>
  );
};

export default Header;