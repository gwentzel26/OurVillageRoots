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




const AboutUs = () => {


    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <p> Our Village Roots trust was founded by Serigne and Sabrina N’Diaye. Their marriage is more than just a 
            life-long partnership– it is a blend of cultures, religions, and history.  Together, with their young adult 
            daughters, they have served as bridges between the sometimes hectic pace of American life and the slow, melodic,  
            rhythm of the village experience. </p>

            </main>
           
      
        </>


        )

}

export default AboutUs;