import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Carousel
          showThums={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showArrows={false}
        >
            <div className="slider-text">
                <h2>Fast Food Restaurant</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consectetur vero eveniet veniam quaerat est, sit dolorem eaque aspernatur inventore pariatur aliquid iste ratione veritatis doloribus? Nulla eum velit accusamus.</p>
                <button className="order-button">
                    Order Now
                </button>
            </div>
            <div className="slider-text">
                <h2>Best Burger in Town</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consectetur vero eveniet veniam quaerat est, sit dolorem eaque aspernatur inventore pariatur aliquid iste ratione veritatis doloribus? Nulla eum velit accusamus.</p>
                <button className="order-button">
                    Order Now
                </button>
            </div>
            <div className="slider-text">
                <h2>Fast Food Restaurant</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consectetur vero eveniet veniam quaerat est, sit dolorem eaque aspernatur inventore pariatur aliquid iste ratione veritatis doloribus? Nulla eum velit accusamus.</p>
                <button className="order-button">
                    Order Now
                </button>
            </div>
        </Carousel>


      </div>
    </div>
  );
};

export default Header;
