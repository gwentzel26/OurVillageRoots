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
  import flag from "../assets/images/senegalFlag.jpeg"



const AboutUs = () => {


    return(
        <>
            <header>
                <Navbar />
                <div className="locationNav">
                <h3>Ndoucouman, Senegal
                    <img className="senegalFlag" src={flag} style={{width: "3vw", height: "4vh"}}/>
                </h3>

          </div>
            </header>
            <main>
                <div className="aboutContent">
                    <div className="aboutDescrip">
                        <p> Our Village Roots trust was founded by Serigne and Sabrina N’Diaye. Their marriage is more than just a 
                        life-long <br></br>partnership– it is a blend of cultures, religions, and history.  Together, with their young adult 
                        daughters, they have <br></br>served as bridges between the sometimes hectic pace of American life and the slow, melodic,  
                        rhythm of the <br></br> village experience. </p>
                    </div>
                    <div className="holdBaby">
                        <img src={holdingbaby} alt="Serigne holding baby" style={{width: "26vw", height: "60vh"}}/>
                    </div>

                </div>
               
           
            </main>
           
      
        </>


        )

}

export default AboutUs;