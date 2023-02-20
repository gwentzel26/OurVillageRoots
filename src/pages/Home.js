import { renderMatches } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../css/Home.css';
import watertower from "../assets/images/watertowerPeople.jpeg";
import closeGirl from "../assets/images/closeupGirl.jpg";
import closeKid from "../assets/images/closeupkid.jpg";
import goldDress from "../assets/images/goldDress.jpg";
import huts from "../assets/images/huts.jpg";
import horse from "../assets/images/horse.jpg";
import mimi from "../assets/images/mimindoukman.jpg";
import threechildren from "../assets/images/threechildren.jpg";
import oldman from "../assets/images/oldman.jpeg";
import groupKids from "../assets/images/groupKids.jpeg";
import { auto } from "@popperjs/core";
import '../fonts/Sora,Tangerine/Tangerine/Tangerine-Regular.ttf';


const Home = () => {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
                <div className="homeBackground font-face-gm">
                  <div className="titleText d-flex">
                    <h2 >Serving Mama Africa</h2>
                    <h4>One Village at a Time</h4>
                  </div>
                  
                </div>
        </main>
      </div>

      <div className="btmHome">
        <h1>100% of your donation will go towards... </h1>
        <div className="Container">
                <div className="picCarousel">
                    <img id="waterPic" src={watertower} alt="Watertower of Ndoucouman" />
                    <img src={closeGirl} alt="Close up of a little girl"></img>
                    <img src={closeKid} alt="Kid making a hand gesture"></img>
                    <img src={goldDress} alt="Little girl in gold dress"></img>
                    <img src={oldman} alt="An older man with his grandkid"></img>
                    <img src={huts} alt="Senegalese Huts"></img>
                    <img src={horse} alt="Horse and buggy in nearby town"></img>
                    <img src={mimi} alt="Amina Ndiaye with her cousins"></img>
                    <img src={threechildren} alt="Three girls sitting against a wall"></img>
                    <img src={groupKids} alt="Several local children"></img>
                </div>
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
