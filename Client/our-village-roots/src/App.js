import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <header>
        <Navbar />

    </header>
      
        
        <h2>
              Serving Mama Africa… One Village At A Time
        </h2>
        <h3>Ndoucouman, Sengegal</h3>
      
   
    </>
  );
}

export default App;
