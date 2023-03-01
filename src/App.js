import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import History from './pages/History';
import AboutUs from './pages/AboutUs';
import Donation from './pages/Donation';

function App() {
  return (
    <>

<BrowserRouter>
    <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='/history' element = {<History/>} />
        <Route path='/OurVillageRoots/aboutus' element = {<AboutUs/>} />
        <Route path='/OurVillageRoots/donate' element = {<Donation/>} />
    </Routes> 
    
    </BrowserRouter>
    </>
  );
}

export default App;
