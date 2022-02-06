import React from "react";



function Header({ title, subtitle })  {
  return (
    <header>
    <div className="Title">
      <h1>{title}</h1>
              <p>Katalog </p> 
              <h2>{subtitle}</h2>
              <p>Aplikacja Julii Koszlak</p>
              
      </div>
    </header>
  );
};

export default Header;