import React from "react";
import "./Promotion.css";
import { FaShoppingCart } from "react-icons/fa";
const Promotion = () => {
  return (
    <div className="promotions">
      <div className="promotion-card">
        <img src="/src/assets/images/f2.png" alt="Burger" />
        <div className="promotion-content">
          <div className="promotion-title">Tasty Thursdays</div>
          <div className="promoion-discount">20% off</div>
          <button className="order-button">
            Order Now <FaShoppingCart />
          </button>
        </div>
      </div>
      <div className="promotion-card">
        <img src="/src/assets/images/f2.png" alt="Burger" />
        <div className="promotion-content">
          <div className="promotion-title">Tasty Thursdays</div>
          <div className="promoion-discount">20% off</div>
          <button className="order-button">
            Order Now <FaShoppingCart />
          </button>
        </div>
      </div>
      <div className="promotion-card">
        <img src="/src/assets/images/f6.png" alt="Pizza" />
        <div className="promotion-content">
          <div className="promotion-title">Pizza Days</div>
          <div className="promoion-discount">15% off</div>
          <button className="order-button">
            Order Now <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Promotion;
