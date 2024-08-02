import React from "react";
import { useState } from "react";
import "./menu.css";
import { FaShoppingCart } from "react-icons/fa";

const menuItem = [
  {
    category: "Pizza",
    Name: "Delicious Pizza",
    Price: "20$",
    Image: "/src/assets/images/f1.png",
  },
  {
    category: "Burgar",
    Name: "Tasty Burger",
    Price: "15$",
    Image: "/src/assets/images/f2.png",
  },
  {
    category: "Pizza",
    Name: "Delicious Pizza",
    Price: "20$",
    Image: "/src/assets/images/f3.png",
  },
  {
    category: "Pasta",
    Name: "Delicious Pasta",
    Price: "15$",
    Image: "/src/assets/images/f4.png",
  },
  {
    category: "Fries",
    Name: "French Fries",
    Price: "15$",
    Image: "/src/assets/images/f5.png",
  },
  {
    category: "Pizza",
    Name: "Delicious Pizza",
    Price: "20$",
    Image: "/src/assets/images/f6.png",
  },
  {
    category: "Burger",
    Name: "Tasty Burger",
    Price: "25$",
    Image: "/src/assets/images/f7.png",
  },
  {
    category: "Burger",
    Name: "Tasty Burger",
    Price: "35$",
    Image: "/src/assets/images/f8.png",
  },
  {
    category: "Pasta",
    Name: "Delicious Pasta",
    Price: "55$",
    Image: "/src/assets/images/f9.png",
  },
];

const category = ["All", "Burger", "Pizza", "Pasta", "Fries"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filterItems =
    activeCategory === "All"
      ? menuItem
      : menuItem.filter((item) => item.category === activeCategory);
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-categories">
        {category.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {filterItems.map((item, index) => {
          return(
          <div className="menu-card" key={index}>
            <img src={item.Image} alt={item.Name} />
            <div className="menu-card-content">
              <h3>{item.Name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                illum iusto assumenda totam! Laborum delectus aut, esse non,
                beatae totam qui libero magni sapiente ad nemo tenetur quasi ut
                excepturi!
              </p>
              <div className="menu-card-price">{item.Price}</div>
              <button className="order-button"> Order Now <FaShoppingCart /></button>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Menu;
