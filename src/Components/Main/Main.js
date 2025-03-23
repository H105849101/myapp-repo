import React, { useState } from 'react';
import "./Main.css";
import Logo from "../../Assets/Images/poodle logo.png";
import Board from "../../Assets/Images/LeaderBoard.png";
import P1 from "../../Assets/Images/young-brazilian-girl-isolated-blue-wall-playing-basketball copy.png";
import P2 from "../../Assets/Images/beautiful-young-fit-african-sportswoman-isolated-white-wall-holding-basketball copy.png";
import P3 from "../../Assets/Images/medium-shot-woman-training-basketball copy.png";
import P4 from "../../Assets/Images/front-view-sporty-woman-with-basketball-ball copy.png";
import P5 from "../../Assets/Images/smiley-woman-with-basketball-ball copy.png";
import P6 from "../../Assets/Images/front-view-girl-holding-basketball-ball copy.png";
import P7 from "../../Assets/Images/model-photoshoot-with-basketball copy.png";
import P8 from "../../Assets/Images/girl-with-ball copy.png";
import Video from "../../Assets/Videos/5452996_Coll_wavebreak_People_1280x720.mp4";
import TeamImg from "../../Assets/Images/side-view-female-friends-playing-basketball (1).png";
import ContactImg from "../../Assets/Images/Untitled-1.png";

import img1 from '../../Assets/Images/side-view-female-friends-playing-basketball copy.png';
import img2 from '../../Assets/Images/medium-shot-female-friends-playing-basketball copy.png';
import img3 from '../../Assets/Images/Untitled-1.png';

const images = [img1, img2, img3];

console.log(Logo);

function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);

      const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
      const prevImage = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      };


    return (
        <div className="main">
            <div id="about">
            <div className="about">
                <div className="abtxt">
            <h1 style={{fontFamily:"JockeyOne", fontSize:"65px"}}>About Us</h1>
                        <p style={{fontFamily:"Arial, Helvetica, sans-serif", fontSize:"18px"}}>The Melbourne Poodles are Melbourne’s national female basketball team. This team was created in 2005 and have been dominating the WNBL for the last 5 years.</p>
                </div>
                <div className="abtimg">
                <img src={Logo} alt="logo"/>
                </div>
            </div>
            </div>
            <div className="scoring">
                <div id="leaderboard">
                <h1>Leaderboard</h1>

                <div className="board">
                    <img src={Board} alt="Leaderboard"/>
                </div>
                </div>
            </div>
            <div className="playersTitle">
            <h1>Players</h1>
            </div>
            <div className="playersContent">
                <div className="p1img">
                    <img src={P1} alt="Player 1" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Sasha <br /> <b>Height:</b> 5'11" <br /> <b>Number:</b> 23 </p>
                </div>
                <div className="p2img">
                    <img src={P2} alt="Player 2" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Georgia <br /> <b>Height:</b> 5'11" <br /> <b>Number:</b> 27 </p>
                </div>
                <div className="p3img">
                    <img src={P3} alt="Player 3" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Kira <br /> <b>Height:</b> 6'0" <br /> <b>Number:</b> 15 </p>
                </div>
                <div className="p4img">
                    <img src={P4} alt="Player 4" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Sarah <br /> <b>Height:</b> 5'10" <br /> <b>Number:</b> 30 </p>
                </div>
                <div className="p5img">
                    <img src={P5} alt="Player 5" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Taylor <br /> <b>Height:</b> 5'10" <br /> <b>Number:</b> 10 </p>
                </div>
                <div className="p6img">
                    <img src={P6} alt="Player 6" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Gabby <br /> <b>Height:</b> 6'0" <br /> <b>Number:</b> 22 </p>
                </div>
                <div className="p7img">
                    <img src={P7} alt="Player 7" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Teagan <br /> <b>Height:</b> 6'0" <br /> <b>Number:</b> 35 </p>
                </div>
                <div className="p8img">
                    <img src={P8} alt="Player 8" />
                </div>
                <div className="p1txt">
                    <p> <b>Name:</b> Emily <br /> <b>Height:</b> 5'10" <br /> <b>Number:</b> 17 </p>
                </div>
            </div>
            <div className="playerHiLow">
                <div className="pHiLowCon">
                    <div className="pHiLowImg">
                        <h1 style={{fontFamily:"JockeyOne", fontSize:"45px"}}>Player Highlights and Lowlights</h1>
                        <video width="820" height="740" autoPlay loop>
                        <source src={Video}></source>
                        </video>
                    </div>
                        <div className="column1">
                        <div className="sasha">
                        <h3><b>Sasha:</b></h3>
                        <div className="custom-list">
                            <p>
                            <li>Played really good defence, and <br /> blocked many shots during the game.</li>
                            <li>Ball handling was off in the last game</li>
                            </p>
                            </div>
                        </div>
                        <div className="kira">
                        <h3>Kira:</h3>
                        <div className="custom-list">
                        <p>
                         <li>Made many good 3 pointers during <br />the game.</li>
                         <li>Defence wasn’t as strong as it <br />could have been.</li>
                        </p>
                        </div>
                        </div>
                        <div className="taylor">
                        <h3>Taylor:</h3>
                        <div className="custom-list">
                        <p>
                         <li>Ball handling was spectacular.</li>
                         <li>Made some questionable passes<br />in the game.</li>
                        </p>
                        </div>
                        </div>
                        
                        <div className="teagan">
                        <h3>Teagan:</h3>
                        <div className="custom-list">
                        <p>
                         <li>Made some really good passes <br />during game.</li>
                         <li>Shooting game could have <br />been better.</li>
                        </p>
                        </div>
                        </div>
                        </div>
                        <div className="column2">
                        <div className="georgia">
                        <h3>Georgia:</h3>
                        <div className="custom-list">
                        <p>
                         <li>Ball handling and passing <br />stood out in last game.</li>
                         <li>Defence needs some work.</li>
                        </p>
                        </div>
                        </div>
                        <div className="sarah">
                        <h3>Sarah:</h3>
                        <div className="custom-list">
                        <p>
                         <li>Defence was fantastic during last game.</li>
                         <li>We’ve seen her do better ball handling.</li>
                        </p>
                        </div>
                        </div>
                        <div className="gabby">
                        <h3>Gabby:</h3>
                        <div className="custom-list">
                        <p>
                         <li>Sank almost every shot she put up.</li>
                         <li>Wasn’t relying on her team mates <br />as much as she could have.</li>
                        </p>
                        </div>
                        </div>
                        <div className="emily">
                        <h3>Emily:</h3>
                        <div className="custom-list">
                        <p>
                         <li>Had some really impressive passes.</li>
                         <li>Confidence wasn’t there in last game.</li>
                        </p>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="gallery">
            <h1 style={{fontSize: 45}}>Photo Gallery</h1>
            <div className="gallImgs">
      <button onClick={prevImage} className="carousel-button prev-button">
      <b style={{fontSize: 30}}>{"<"}</b>
      </button>

      <img
        src={images[currentIndex]}
        alt={`Gallery ${currentIndex + 1 }`}
        className="carousel-image"
      />
      
      <button onClick={nextImage} className="carousel-button next-button">
      <b style={{fontSize: 30}}>{">"}</b>
      </button>
      </div>
       </div>

       <div className="teamHiLow">
        <div className="tHiLowTxt">
        <h1 style={{fontFamily:"JockeyOne", fontSize:"45px"}}>Team Highlights and Lowlights</h1> <br />
                <h3>Highlights:</h3>
                    <p>
                        <li>Players played really well as a team. Always knew where one another were, which helped set up some exceptional passes. </li>
                        <li>As a group defence was really good. They put lots of good pressure on opposing team.</li>
                    </p>
                    <br />
                <h3>Lowlights:</h3>
                    <li>As a team, ball handling needed some improvement in last game. Many players lost control multiple times during the game.</li>
                    <li>Most players shooting game was off, while we know there are some brilliant shooters on the team.</li>
        </div>
        <div className="tHiLowImg">
            <img src={TeamImg} alt="Team Playing"></img>
        </div>
       </div>
       < div className="ppAndTc">
       <div className="privPol">
       <h1 style={{fontFamily:"JockeyOne", fontSize:"45px"}}>Privacy Policy</h1>
            <p>
            The Melbourne Poodles respects your privacy and understands the importance of protecting your personal data. Below is our privacy policy. 
                <br /> <br />
                The personal data we collect includes your full name and email address. Other data we collect includes browser type, IP address, and cookie tracking. We use this information to provide better customer support and ensure our website’s performance quality is up to our standard.
                <br /> <br />
                If you have any questions or concerns about our privacy policy, please contact us via the details below.
            </p>
       </div>
       <div className="tsAndCs">
       <h1 style={{fontFamily:"JockeyOne", fontSize:"45px"}}>Terms and Conditions</h1>
        <p>
        By accessing our website you agree to the terms and conditions listed below:
            <br /> <br />
            <div className="custom-list">
            <li>Not to use our website for harmful or illegal activities.</li>
            <li>Not to use/ distribute information from our website without consent.</li>
            <br />
            We may terminate/ suspend your access to our website with cause, without notice. These terms and conditions amount to the agreement between you and The Melbourne Poodles.com.
            <br /> <br />
            If you have any questions or concerns about our privacy policy, please contact us via the details below.
            </div>
        </p>
       </div>
       </div>
       <div id="contact">
       <div className="contact">
        <div className="conTxt">
        <h1 style={{fontFamily:"JockeyOne", fontSize:"45px"}}>Contact Us</h1>
        <div className="cForm">
        <form action="action_page.php">
              
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          
              <label for="Email">Email</label>
              <input type="text" id="Email" name="Email" placeholder="example@example.com" />

              <label for="subject">Subject</label>
                  <textarea id="subject" name="subject" placeholder="Write something.." style={{height:100}}></textarea>
              
          
              <input type="submit" value="Submit" />
          
            </form>
        </div>
        </div>
        <div className="conImg">
            <img src={ContactImg} alt="girl with basketball"></img>
        </div>
       </div>
       </div>
        </div>
      
    )
}

export default Main;
