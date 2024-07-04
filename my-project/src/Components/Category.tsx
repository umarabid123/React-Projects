import { count } from "console";
import React from "react";
import CategoryCard from "./CategoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "/src/assets/category__1.webp",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "/src/assets/category__2.webp",
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "10 Products",
    img: "/src/assets/category__3.webp",
  },
  {
    id: 3,
    name: "Bread & Bakery",
    count: "12 Products",
    img: "/src/assets/category__4.webp",
  },
  {
    id: 4,
    name: "Fishes",
    count: "10 Products",
    img: "/src/assets/category__5.webp",
  },
  {
    id: 5,
    name: "Eggs & Dairy",
    count: "7 Products",
    img: "/src/assets/category__6.webp",
  },
  {
    id: 6,
    name: "Soft Drink",
    count: "5 Products",
    img: "/src/assets/category__7.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "/src/assets/category__8.webp",
  },
];

function Category(props) {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
