import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2  gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            src="/src/assets/hero__1.webp"
            className="w-full h-full bg-cover rounded-lg"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-1">
            <p className="text-2xl hidden sm:block">
              100% Original Dry Fruites
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold ">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Strating at</p>
            <div className="font-medium text-2xl sm:text-4xl text-red-600 pb-4 sm:pb-8">
              $18.36
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              {" "}
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src=" /src/assets/hero__2.webp" alt="" className="h-full w-full object-cover rounded-lg"/>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Strating at</p>
            <div className="font-medium text-2xl sm:text-4xl text-red-600 pb-8">
              $18.36
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              {" "}
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src=" /src/assets/hero__3.webp" alt="" className="w-full h-full object-cover rounded-lg"/>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Chips</h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Strating at</p>
            <div className="font-medium text-2xl sm:text-4xl text-red-600 pb-8">
              $10
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              {" "}
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
