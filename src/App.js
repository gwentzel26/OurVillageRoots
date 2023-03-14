import './App.css';
import React from 'react';
import {HashRouter, BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import History from './pages/History';
import AboutUs from './pages/AboutUs';
import Donation from './pages/Donation';

function App() {
  return (
    <>

<HashRouter>
    
        <Route path="/" element={<Home />} />
        <Route path='/history' element = {<History/>} />
        <Route path='/aboutus' element = {<AboutUs/>} />
        <Route path='/donate' element = {<Donation/>} />
   
    
</HashRouter>
    </>
  );
}

export default App;
