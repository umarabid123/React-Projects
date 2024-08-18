import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
      <Link style={{textDecoration:'none', color:'#626262'}} to="/"> <li onClick={() => setMenu("shop")}>Shop{menu === "shop"? <hr/>:""}</li></Link>
      <Link style={{textDecoration:'none', color:'#626262'}} to="/mens"><li onClick={() => setMenu("men")}>Men{menu === "men"? <hr/>:""}</li></Link> 
      <Link style={{textDecoration:'none', color:'#626262'}} to ="/womens"><li onClick={() => setMenu("women")}>Women{menu === "women"? <hr/>:""}</li></Link>
      <Link style={{textDecoration:'none', color:'#626262'}} to="kids"><li onClick={() => setMenu("kids")}>Kids{menu === "kids"? <hr/>:""}</li></Link>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
            0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
