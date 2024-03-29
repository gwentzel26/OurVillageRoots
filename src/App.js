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

     {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/history' element = {<History/>} />
        <Route exact path='/aboutus' element = {<AboutUs/>} />
        <Route exact path='/donate' element = {<Donation/>} />
    </Routes>  */}

  <BrowserRouter basename="/">
    <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path='/history' element = {<History/>} />
        <Route exact path='/aboutus' element = {<AboutUs/>} />
        <Route exact path='/donate' element = {<Donation/>} />
    </Routes> 
   </BrowserRouter>
 
  
    </>
  );
}

export default App;
