import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage/>} /> */}
        <Route path="Header" element={<Header/>}/>
      </Routes>
      </BrowserRouter>
      </div>

  );
};

export default App;