import React from "react";

function Header({ setFirstName, setAge, setLastName, hendleAdd, firstName, lastName, age,hendleClear,id , editIndex,handleEditValue}) {
  return (
    <div className="bg-white p-4">
      <div className="headerInput flex items-center justify-center gap-6">
        <form action="">
          <label className="text-xl font-medium font-sans text-sky-500">
            First Name:
            <input
              type="text"
              className="border ml-5 rounded-lg p-2 text-black outline-sky-500 placeholder:text-gray-400"
              placeholder="Enter your last name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>
          <label className="text-xl font-medium font-sans text-sky-500">
            Last Name:
            <input
              type="text"
              className="border ml-5 rounded-lg p-2 text-black outline-sky-500 placeholder:text-gray-400"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          <label className="text-xl font-medium font-sans text-sky-500">
            Age:
            <input
              type="number"
              className="border ml-5 rounded-lg p-2 text-black outline-sky-500 placeholder:text-gray-400"
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
            />
          </label>
        </form>
        <button
          className="bg-sky-500 text-white p-2 w-24 rounded-lg hover:bg-white hover:border hover:text-sky-500 hover:border-sky-500 transition-all duration-500 text-xl"
          onClick={editIndex !==null? handleEditValue:hendleAdd}
        >
          { editIndex !==null? "Update":"Add"}
        </button> 
        <button className="bg-red-500 text-white p-2 w-24 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-500 text-xl" onClick={() => hendleClear(id)}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Header;
