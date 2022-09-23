import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';

function App() {
  return (
    <>

<BrowserRouter>
    
    <div className='container'>
    <Routes> 
        <Route path="/" element={<Home />} />
        {/* <Route path='/edit/:id' element = {<EditExercise/>} />
        <Route path='/create' element = {<CreateExercise/>} />
        <Route path='/user' element = {<CreateUser/>} /> */}
    </Routes> 
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
