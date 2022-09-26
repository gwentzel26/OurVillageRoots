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
  import watertower from "../assets/images/watertower.jpg";




const Vision = () => {


    return(
        <>
            <header>
                <Navbar />
            </header>
      
            <h2>This year, our goal is to enhance the village's sustainability. This includes, </h2>
            <ul>
                <li>Increasing the water tower's capacity</li>
                <li>Installing  an additional solar panel for the community's power</li>
                <li>Enhancing the infrastructure of several older dwellings</li>
                <li>Constructing a shade structure  over the community gathering space</li>
                <li>Purchasing and shipping a hybrid vehicle, allowing us ease of access in moving produce (and people).</li>
                <li>Expanding the medical facility, which includes housing for volunteer American physicians</li>
            </ul>

            <div>
                <img src={watertower} alt="Watertower of Ndoucouman" style={{width: "30vw", height: "60vh"}}/>
            </div>
        </>


        )

}

export default Vision;