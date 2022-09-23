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




const History = () => {


    return(
        <>
            <header>
                <Navbar />
            </header>
      
        <p>Our Village Roots is inspired by Serigne’s roots in Ndoucouman (Wolof for, “trusted home”) Ndiaye, which was founded by 
            <br></br>Serigne’s paternal grandfather,  Makhtar N’Diaye. After hundreds of years of change in the outside world, it remains a tight-knit community of farmers and families. Seven generations are buried on its soil. It rests in the heart of Senegal, West Africa, connecting us all with the countless Americans whose ancestors were once stolen and sold from this region.
Today, Village Roots is committed to the preservation of Wolof traditions, along with the sustainability of the village
</p>
      
        </>


        )

}

export default History;