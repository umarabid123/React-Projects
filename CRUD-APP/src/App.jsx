import { useEffect, useState } from "react";
import "./App.css";
import { EmployeeData } from "./Components/Card/Card";
import Header from "./Components/Header/Header_Input";
function App() {
  const [data, setData] = useState([])

  useEffect(() =>{
    setData(EmployeeData)
  }, [])

  const deleteItem = (id) => {
    const updatedItems = data.filter(item => item.id !== id);
    setData(updatedItems);
    console.log("delete")
  };
  return (
    <div className="app bg-[#f7f7f7] h-[100vh]">
      <h1 className="text-7xl text-sky-500 text-center pt-6 mb-10">CRUD APP</h1>
      <Header />
      <div className="border-b px-6 bg-white">
      <table className="max-w-[100%] w-full mx-auto">
        <thead className="">
          <tr className="flex justify-between items-center w-full text-center max-w-[100%] hover:bg-gray-100">
            <td className="text-xl h-12 w-[16%] font-bold text-sky-500">
              Sr.No
            </td>
            <td className="text-xl h-12  w-[8%] font-bold text-sky-500">Id</td>
            <td className="text-xl h-12 w-[13%] font-bold text-sky-500">
              First Name
            </td>
            <td className="text-xl h-12 w-[13%] font-bold text-sky-500">
              Last Name
            </td>
            <td className="text-xl h-12 w-[12%] font-bold text-sky-500">Age</td>
            <td className="text-xl h-12 w-[15%] font-bold text-sky-500">
              Action
            </td>
            {/* <button className="bg-sky-500 m-2 text-white p-2 w-24 rounded-lg hover:bg-white hover:border hover:text-sky-500 hover:border-sky-500 transition-all duration-500 text-xl">
              Save
            </button>
            <button className="bg-red-500 m-2 text-white p-2 w-24 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-500 text-xl">
              Clear
            </button> */}
          </tr>
        </thead>
        <tbody className="w-[90%]">
          {data.map((item, index) => {
            return (
              <tr
                className="text-black flex justify-between items-center w-full border border-l-0 border-r-0 border-b py-2 text-center hover:bg-gray-100 hover:text-sky-500 transition-all duration-300 cursor-pointer"
                key={index}
              >
                <td className="text-xl h-12 w-[16%]">{index + 1}</td>
                <td className="text-xl h-12 w-[8%]">{item.id}</td>
                <td className="text-xl h-12 w-[13%]">{item.firstName}</td>
                <td className="text-xl h-12 w-[13%]">{item.lastName}</td>
                <td className="text-xl h-12 w-[12%]">{item.age}</td>
                <div className="btn w-[15%]">
                  <button className="bg-sky-500 text-white p-2 w-24 rounded-lg hover:bg-sky-600transition-all duration-500 text-xl m-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white p-2 w-24 rounded-lg hover:bg-red-600 transition-all duration-500 text-xl m-2" onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
