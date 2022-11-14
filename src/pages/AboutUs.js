import React from "react";
import { Link } from "react-router-dom";
  import Navbar from "../components/Navbar";
  import holdingbaby from "../assets/images/holdingbaby.jpg";
  import aboutSabrina from "../assets/images/AboutSabrina.jpeg";
  import brownFlower from "../assets/images/floral-design-hi.png";
  import "../css/AboutUs.css";
  import flag from "../assets/images/senegalFlag.jpeg";
  import facebook from "../assets/images/facebookIcon.png"



const AboutUs = () => {
    return(
        <>
            <header>
                <Navbar />
            </header>
           
                <div className="aboutContainer">
                    <div className="aboutContent">
                        <div className="holdBaby">
                            <img src={holdingbaby} alt="Serigne holding baby"/>
                        </div>

                        <div className="aboutDescrip">
                            <div className="floralContainer">
                                <img className="floralDesign floralRotate" src={brownFlower} alt="Floral Design"/>
                            </div>
                                
                            <div>
                                <p> Our Village Roots trust was founded by Serigne and Sabrina N’Diaye. Their marriage is more than just a 
                                life-long partnership– it is a blend of cultures, religions, and history.  Together, with their young adult 
                                daughters, they have served as bridges between the sometimes hectic pace of American life and the slow, melodic,  
                                rhythm of the village experience. </p>
                            </div>
                            
                            <div className="floralContainer">
                                <img className="floralDesign" src={brownFlower} alt="Floral Design"/>
                            </div>
                            
                        </div>

                        <div className="aboutSabrina">
                            <img src={aboutSabrina} alt="Sabrina"/>
                        </div>
                    </div>
                </div>               
        </>


        )

}

export default AboutUs;