import React from "react";
import { IoMdSearch } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { LiaShoppingCartSolid } from "react-icons/lia";
import CartCountBadge from "./CartCountBadge";

function Navbar() {
  return (
    <nav>
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center pt-8">
          <h1 className="text-4xl font-medium">Logo</h1>
          <div className="relative w-full max-w-[500px]">
            <input type="text" className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" placeholder="Search Product..." />
            <IoMdSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" 
            size={20} />
          </div>
          <div className="flex gap-4">
            <div className="icon-wrapper">
            <LuUser2 />
            </div>
            <div className="icon-wrapper relative">
            <LiaShoppingCartSolid />
            <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
