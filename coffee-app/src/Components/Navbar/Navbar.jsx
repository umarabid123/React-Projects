import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 max-w-[100%] pt-10 text-white z-10 w-full">
      {/* logo section */}
      <div className="container">
        <div className="flex justify-between items-center w-[100%]">
          <h1 className="text-2xl font-semibold ">
            <span className="text-primary uppercase">Coders</span>Coffee.
          </h1>
          <div>
            {/* <GiHamburgerMenu className ="text-3xl cursor-pointer"  /> */}
            <GiHamburgerMenu className="text-3xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
