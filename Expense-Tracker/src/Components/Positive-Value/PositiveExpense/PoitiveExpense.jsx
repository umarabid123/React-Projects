import React from "react";

function PoitiveExpense({ item }) {
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
        <p className="bg-black p-2 text-white h-10 hidden group-hover:block absolute -left-12">cross</p>
      </div>
    </>
  );
}

export default PoitiveExpense;
