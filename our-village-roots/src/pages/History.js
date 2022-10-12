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
import map from "../assets/images/senegalMap.png";
import flag from "../assets/images/senegalFlag.jpeg";

const History = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="locationNav">
          <h3 id="ndouc">
            Ndoukouman Ndiaye, Senegal
          </h3>
          <img
              className="senegalFlag"
              src={flag}
            />
        </div>
      </header>
      <body>
        <div className="historyContainer">
            <p className="m-4 historyContent">
              Our Village Roots is inspired by Serigne’s roots in Ndoucouman (Wolof
              for, “trusted home”) Ndiaye, which was founded by
              Serigne’s paternal grandfather, Makhtar N’Diaye. After
              hundreds of years of change in the outside world, it remains a
              tight-knit community of farmers and families. Seven
              generations are buried on its soil. It rests in the heart of Senegal,
              West Africa,
              connecting us all with the countless Americans whose ancestors were
              once stolen and sold from this region. Today, Village Roots
              is committed to the preservation of Wolof traditions, along with the
              sustainability of the village. <br></br> <br></br>
              In 2021, the N’Diaye family ran a fundraising campaign of all of their
              American friends, most of whom contributed $25 toward Ndoucouman's
              residents experiencing a basic need that many of us take for
              granted--access to clean drinking water. In 2022, Sabrina and Serigne
              drank the water!
            </p>
            
          
            <img
              src={map}
              className="senegalMap"
            ></img>
            
        </div>
            <img
              src={townsign}
              id="townsign"
            ></img>
      </body>
      
    </>
  );
};

export default History;
