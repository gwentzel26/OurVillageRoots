import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import History from './pages/History';
import AboutUs from './pages/AboutUs';
import Donation from './pages/Donation';
import Contact from './pages/Contact';

function App() {
  return (
    <>

<BrowserRouter>
    <Routes> 
        <Route path="/" element={<Home />} />
        {/* {/* <Route path='/edit/:id' element = {<EditExercise/>} /> */}
        <Route path='/history' element = {<History/>} />
        <Route path='/aboutus' element = {<AboutUs/>} />
        <Route path='/donate' element = {<Donation/>} />
        <Route path='/contact' element = {<Contact/>} />
    </Routes> 
    
    </BrowserRouter>
    </>
  );
}

export default App;
