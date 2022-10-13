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
  import holdingbaby from "../assets/images/holdingbaby.jpg";
  import "../css/AboutUs.css";
  import flag from "../assets/images/senegalFlag.jpeg";
  import facebook from "../assets/images/facebookIcon.png"



const AboutUs = () => {


    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="aboutContainer">
                    <div className="aboutContent">
                        <div className="aboutDescrip">
                            <p> Our Village Roots trust was founded by Serigne and Sabrina N’Diaye. Their marriage is more than just a 
                            life-long partnership– it is a blend of cultures, religions, and history.  Together, with their young adult 
                            daughters, they have served as bridges between the sometimes hectic pace of American life and the slow, melodic,  
                            rhythm of the village experience. </p>
                        </div>
                        <div className="holdBaby">
                            <img src={holdingbaby} alt="Serigne holding baby"/>
                        </div>

                        </div>
                        <div className="contactInfo">
                            <img src={facebook} alt="facebook icon" />
                            Sabrina
                </div>



                </div>
               
           
            </main>
           
      
        </>


        )

}

export default AboutUs;