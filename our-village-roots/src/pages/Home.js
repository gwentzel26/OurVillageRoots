import { renderMatches } from "react-router-dom";
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
import townsign from "../assets/images/townsign.jpg";
import '../css/Home.css'
import watertower from "../assets/images/watertower.jpg"

const Home = () => {
  return (
    <>
      <div className="homeBackground">
        <header>
          <Navbar />
        </header>
        <main>
          <h2 >Serving Mama Africa… One Village At A Time</h2>
          <h3>Ndoucouman, Sengegal</h3>

          <div>
            {/* <img
              src={townsign}
              alt="Townsign of Ndoucouman"
              style={{ width: "30vw", height: "60vh" }}
            /> */}
          </div>

          
        </main>
      </div>

      <div className="btmHome">
        <h1>100% of your donation will go towards enhancing the village's sustainability. This includes, </h1>
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
      </div>
    </>
  );
};

export default Home;
