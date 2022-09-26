import React from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Navbar from "../components/Navbar";
import "../css/History.css";
import townsign from "../assets/images/townsign.jpg";
import map from "../assets/images/senegalMap.png"
import flag from "../assets/images/senegalFlag.jpeg"

const History = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="locationNav">
                <h3>Ndoucouman, Senegal
                    <img className="senegalFlag" src={flag} style={{width: "3vw", height: "4vh"}}/>
                </h3>

          </div>
      </header>
      
        <p className="m-4 historyContent">
          Our Village Roots is inspired by Serigne’s roots in Ndoucouman (Wolof
          for, “trusted home”) Ndiaye, which was founded by
          <br></br>Serigne’s paternal grandfather, Makhtar N’Diaye. After
          hundreds of years of change in the outside world, it remains a 
          tight-knit <br></br> community of farmers and families. Seven generations are
          buried on its soil. It rests in the heart of Senegal, West Africa, <br></br>
          connecting us all with the countless Americans whose ancestors were
          once stolen and sold from this region. Today, Village Roots <br></br>is
          committed to the preservation of Wolof traditions, along with the
          sustainability of the village
        </p>
            <img src={map} className="senegalMap" style={{width: "25vw", height: "40vh"}} ></img>
       
            <img src={townsign} id="townsign" style={{width: "25vw", height: "45vh"}} ></img>
        

        
        
    </>
  );
};

export default History;
