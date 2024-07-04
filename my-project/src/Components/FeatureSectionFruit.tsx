import React from "react";

const FeatureSectionFruit = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fresh fruits and vegetables online at thre best price
          </p>
        </div>
        <div className="space-y-4 mt-8 lg:mt-0 "></div>
        <button className="feature-btn">Fruits</button>
        <button className="text-gray-600 hover:text-accent">Vegetables</button>
        <button className="text-gray-600 hover:text-accent">Bread & Bakery</button>
      </div>
    </div>
  );
};

export default FeatureSectionFruit;
