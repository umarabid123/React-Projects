import React from "react";

function Header(item) {
  return (
    <div className="bg-white p-4">
      <div className="headerInput flex items-center justify-center gap-6">
        {" "}
        <label className="text-xl font-medium font-sans text-sky-500">
          First Name: 
          <input
            type="text"
            className="border ml-5 rounded-lg p-2 text-black outline-sky-500 placeholder:text-gray-400"
            placeholder="Enter your last name" 
          />
        </label>
        <label className="text-xl font-medium font-sans text-sky-500">
          Last Name: 
          <input
            type="text"
            className="border ml-5 rounded-lg p-2 text-black outline-sky-500 placeholder:text-gray-400"
            placeholder="Enter your last name"
          />
        </label>
        <label className="text-xl font-medium font-sans text-sky-500">
          Age: 
          <input
            type="text"
            className="border ml-5 rounded-lg p-2 text-black outline-sky-500 placeholder:text-gray-400"
            placeholder="Enter your age"
          />
        </label>
        <button className="bg-sky-500 text-white p-2 text-black w-24 rounded-lg hover:bg-white hover:border hover:text-sky-500 hover:border-sky-500 transition-all duration-500 text-xl" onClick={hendleAdd}>
          Add
        </button>
        <button className="bg-red-500 text-white p-2 text-black w-24 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-500 text-xl" onClick={hendleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Header;
