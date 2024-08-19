import React from "react";
import { ImCross } from "react-icons/im";

function PoitiveExpense({ item, hendleDelete, index}) {


  return (
    <>
      <div className="flex flex-row-reverse items-center group relative">
        <div
          className={`bg-white w-full border-r-4 flex justify-between items-center p-2 mt-4   hover:text-white transition-all duration-700 cursor-pointer ${
            item.amount > 0
              ? "border-[#b6960a] hover:bg-[#b6960a] "
              : "border-[#2da3ad]  hover:bg-[#2da3ad]"
          }`}
        >
          <p className="text-lg">{item.description}</p>
          <p className="text-lg">${item.amount}</p>
        </div>
       <div className="icon bg-gray-900 py-2 px-3 text-white h-9 hidden group-hover:block absolute -left-10 top-5"><ImCross onClick={() =>hendleDelete(index)} /></div>
      </div>
    </>
  );
}

export default PoitiveExpense;
