import React from "react";

function Header() {
  return (
    <div className="bg-white p-4">
      <div className="headerInput flex items-center justify-center gap-6">
        {" "}
        <label className="text-xl font-medium font-sans">
          First Name: 
          <input
            type="text"
            className="border ml-5 rounded-lg p-2 outline-sky-500 placeholder:text-gray-400"
            placeholder="Enter your last name"
          />
        </label>
        <label className="text-xl font-medium font-sans">
          Last Name: 
          <input
            type="text"
            className="border ml-5 rounded-lg p-2 outline-sky-500 placeholder:text-gray-400"
            placeholder="Enter your last name"
          />
        </label>
        <label className="text-xl font-medium font-sans">
          Age: 
          <input
            type="text"
            className="border ml-5 rounded-lg p-2 outline-sky-500 placeholder:text-gray-400"
            placeholder="Enter your age"
          />
        </label>
        <button className="bg-sky-500 text-white p-2 w-24 rounded-lg hover:bg-white hover:border hover:text-sky-500 hover:border-sky-500 transition-all duration-500 text-xl">
          Save
        </button>
        <button className="bg-red-500 text-white p-2 w-24 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-500 text-xl">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Header;
