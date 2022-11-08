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
import '../css/Home.css';
import watertower from "../assets/images/watertowerPeople.jpeg";
import flag from "../assets/images/senegalFlag.jpeg";
import closeGirl from "../assets/images/closeupGirl.jpg";
import closeKid from "../assets/images/closeupkid.jpg";
import goldDress from "../assets/images/goldDress.jpg";
import huts from "../assets/images/huts.jpg";
import horse from "../assets/images/horse.jpg";
import mimi from "../assets/images/mimindoukman.jpg";
import threechildren from "../assets/images/threechildren.jpg";
import oldman from "../assets/images/oldman.jpeg";
import groupKids from "../assets/images/groupKids.jpeg";



const Home = () => {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
                <div className="homeBackground">
                <h2 >Serving Mama Africa… One Village At A Time</h2>


                </div>
                
      
        </main>
      </div>

      <div className="btmHome">
        <h1>100% of your donation will go towards... </h1>
        <div className="Container">
                {/* <div className="handle left-handle"></div> */}
                <div className="picCarousel">
                    <img id="waterPic" src={watertower} alt="Watertower of Ndoucouman" />
                    <img src={closeGirl}></img>
                    <img src={closeKid}></img>
                    <img src={goldDress}></img>
                    <img src={oldman}></img>
                    <img src={huts}></img>
                    <img src={horse}></img>
                    <img src={mimi}></img>
                    <img src={threechildren}></img>
                    <img src={groupKids}></img>
                </div>
                {/* <button className="handle right-handle"></button> */}
            </div>
        <div className="goalsContainer">
            <ul className="donationGoals">
                <li>Increasing the water tower's capacity</li>
                <li>Installing  an additional solar panel for the community's power</li>
                <li>Enhancing the infrastructure of several older dwellings</li>
                <li>Constructing a shade structure  over the community gathering space</li>
                <li>Purchasing and shipping a hybrid vehicle, allowing us ease of access in moving produce (and people).</li>
                <li>Expanding the medical facility, which includes housing for volunteer American physicians</li>
            </ul>

           
        </div>   
      </div>

      <footer>
            Founded by the N'Diaye family
      </footer>
    </>
  );
};

export default Home;
