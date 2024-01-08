import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";     
const Home = () => {
return(
    <div className="container">
    <nav className="navbar">
      <div className="logo">FoodOX</div>
      <ul className="nav_link">
        <li className="nav1"><Link className="nav_link" to="/Home">Home</Link></li>
        <li className="nav1"><Link className="nav_link" to="/About">About</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Message">Explore</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Contact">Contact</Link></li>
        
      </ul>
    </nav>
    <div className="home">
            <div className="home-content">
                <h1>Order food from favourite restaurants near you.</h1><br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.  </p><br></br>
                <button className="home-btn" type="button">Order</button>
            </div>
            <img class="home-image" src="./home.jpg"/>
    </div>
    </div>
)
}
export default Home;