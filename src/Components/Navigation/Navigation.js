import React from 'react';
import "./Navigation.css";
import logoSmall from "../../Assets/Images/small logo.png";

function Navigation () {
    return (
        
        <div className="navBar">
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-81ab94a1-b137-4c71-a8a3-46956d39f720" data-elfsight-app-lazy></div>
            <a href="logoSmall"> <img src={logoSmall} alt="Small Logo"></img> </a>
        <a href="#about">About Us</a>
            <a href="#leaderboard">Leaderboard</a>
            <a href="#contact">Contact Us</a>
            <input type="text" placeholder="Search.."></input>
        </div>
    )
}

export default Navigation;