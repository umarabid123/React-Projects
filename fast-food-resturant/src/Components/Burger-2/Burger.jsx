import React from "react";
import "./Burger.css";

const Burger = () => {
  return (
    <div className="burger-section">
      <div className="burger-content">
        <img src="/src/assets/images/about-img.png" alt="about-img" />
      </div>
      <div className="burger-text">
        <h2>We are Feane</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aut
          temporibus officiis autem voluptas, ad ipsa ullam excepturi blanditiis
          sunt exercitationem veniam est corporis nihil porro vero labore
          voluptates error!
        </p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

export default Burger;
